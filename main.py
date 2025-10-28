from flask import Flask, request, render_template_string, redirect, url_for, session
from dotenv import load_dotenv
import os, requests, base64

load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv("SECRET_KEY", "your-secret-key")

# Admin credentials
ADMIN_EMAIL = os.getenv("ADMIN_EMAIL")
ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD")

# Gemini setup
GEMINI_ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent"
API_KEY = os.getenv("OPENAI_API_KEY")  # still using this name from your Railway vars
SYSTEM_PROMPT = """You are Coach Joel AI who helps the InterLink Community and Global Ambassadors. 
Be professional, concise, and supportive in your tone. End responses positively.
"""

# --- Sign-in page ---
signin_html = '''
<!DOCTYPE html>
<html>
<head>
<title>Sign In - Coach Joel AI</title>
<style>
body { font-family:"Segoe UI",sans-serif; display:flex; align-items:center; justify-content:center; height:100vh; background:#111; color:#fff; }
.container { background:#1e1e1e; padding:40px; border-radius:12px; box-shadow:0 0 15px rgba(0,0,0,0.5); width:350px; text-align:center; }
input, button { width:90%; padding:10px; margin:10px 0; border-radius:6px; border:none; font-size:15px; }
input { background:#2c2c2c; color:#fff; }
button { background:#0078ff; color:white; font-weight:bold; cursor:pointer; transition:0.3s; }
button:hover { background:#005ccc; }
p { color:red; }
</style>
</head>
<body>
<div class="container">
  <h2>🔒 Sign In</h2>
  <form method="POST">
    <input type="email" name="email" placeholder="Email" required><br>
    <input type="password" name="password" placeholder="Password" required><br>
    <button type="submit">Sign In</button>
  </form>
  <p>{{ message or "" }}</p>
</div>
</body>
</html>
'''

# --- Chat UI with image preview ---
chat_html = '''
<!DOCTYPE html>
<html>
<head>
<title>Coach Joel AI</title>
<style>
body { margin:0; padding:0; font-family:"Segoe UI",sans-serif; background:#121212; color:white; display:flex; flex-direction:column; height:100vh; }
header { background:#1e1e1e; padding:15px; text-align:center; font-size:20px; font-weight:bold; border-bottom:1px solid #333; position:relative; }
a.logout { color:#bbb; text-decoration:none; position:absolute; right:15px; top:18px; font-size:14px; }
a.logout:hover { color:white; }
.chat-container { flex:1; overflow-y:auto; padding:20px; display:flex; flex-direction:column; }
.message { max-width:75%; margin:8px 0; padding:12px 16px; border-radius:12px; line-height:1.5; }
.user { align-self:flex-end; background:#0078ff; border-bottom-right-radius:2px; }
.bot { align-self:flex-start; background:#2c2c2c; border-bottom-left-radius:2px; }
form { display:flex; gap:10px; padding:15px; background:#1e1e1e; border-top:1px solid #333; align-items:center; }
textarea { flex:1; resize:none; background:#2c2c2c; color:white; border:none; padding:10px; border-radius:8px; height:60px; }
button { background:#0078ff; border:none; color:white; padding:0 20px; border-radius:8px; cursor:pointer; font-weight:bold; }
button:hover { background:#005ccc; }
.preview-container { display:none; margin-top:8px; text-align:center; }
.preview-container img { max-width:150px; border-radius:8px; margin-top:5px; }
</style>
</head>
<body>
<header>
  Coach Joel AI 🤖
  <a href="/logout" class="logout">Logout</a>
</header>

<div class="chat-container" id="chat">
  {% for role, text in chat_history %}
    <div class="message {{ 'user' if role=='user' else 'bot' }}">{{ text }}</div>
  {% endfor %}
</div>

<form method="POST" enctype="multipart/form-data">
  <textarea name="message" placeholder="Type your message..." required></textarea>
  <input type="file" name="image" accept="image/*" id="image-input" style="display:none;">
  <label for="image-input" style="cursor:pointer; font-size:24px;">📷</label>
  <button type="submit">Send</button>
</form>

<div class="preview-container" id="preview-container">
  <p>🖼️ Image ready to send:</p>
  <img id="preview" src="#" alt="preview">
</div>

<script>
const chatDiv = document.getElementById('chat');
chatDiv.scrollTop = chatDiv.scrollHeight;

const imageInput = document.getElementById('image-input');
const previewContainer = document.getElementById('preview-container');
const previewImg = document.getElementById('preview');

imageInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (evt) => {
      previewImg.src = evt.target.result;
      previewContainer.style.display = 'block';
    };
    reader.readAsDataURL(file);
  } else {
    previewContainer.style.display = 'none';
  }
});
</script>
</body>
</html>
'''

@app.route('/')
def home():
    return redirect(url_for('signin'))

@app.route('/signin', methods=['GET', 'POST'])
def signin():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        if email == ADMIN_EMAIL and password == ADMIN_PASSWORD:
            session['logged_in'] = True
            session['chat_history'] = []
            return redirect(url_for('chat'))
        else:
            return render_template_string(signin_html, message="❌ Invalid credentials.")
    return render_template_string(signin_html, message=None)

@app.route('/chat', methods=['GET', 'POST'])
def chat():
    if not session.get('logged_in'):
        return redirect(url_for('signin'))

    if 'chat_history' not in session:
        session['chat_history'] = []

    if request.method == 'POST':
        user_input = request.form['message']
        session['chat_history'].append(('user', user_input))

        image = request.files.get('image')

        data = {
            "contents": [{
                "parts": [
                    {"text": SYSTEM_PROMPT + "\nUser: " + user_input}
                ]
            }]
        }

        if image:
            image_bytes = image.read()
            encoded = base64.b64encode(image_bytes).decode('utf-8')
            data["contents"][0]["parts"].append({
                "inline_data": {
                    "mime_type": image.mimetype,
                    "data": encoded
                }
            })

        try:
            res = requests.post(
                f"{GEMINI_ENDPOINT}?key={API_KEY}",
                headers={"Content-Type": "application/json"},
                json=data
            )
            res.raise_for_status()
            response_text = res.json()['candidates'][0]['content']['parts'][0]['text']
        except Exception as e:
            response_text = f"⚠️ Error: {e}"

        session['chat_history'].append(('bot', response_text))

    return render_template_string(chat_html, chat_history=session['chat_history'])

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('signin'))

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 8080))
    app.run(host="0.0.0.0", port=port)
