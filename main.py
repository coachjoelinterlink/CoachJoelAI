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
API_KEY = os.getenv("GEMINI_API_KEY")
SYSTEM_PROMPT = """You are Coach Joel AI who helps the InterLink Community and Global Ambassadors. 
Be professional, concise, and supportive in your tone. End responses positively.
"""

# Sign-in page
signin_html = '''
<!DOCTYPE html>
<html>
<head>
<title>Sign In - Coach Joel AI</title>
<style>
body { font-family: Arial; text-align:center; background: #f2f2f2; }
.container { margin-top: 100px; background: white; padding: 40px; border-radius: 10px; display:inline-block; }
input, button { margin: 10px; padding: 10px; width: 80%; }
button { background: #007BFF; color: white; border: none; border-radius: 5px; cursor: pointer; }
</style>
</head>
<body>
<div class="container">
<h2>Sign In to Coach Joel AI</h2>
<form method="POST">
    <input type="email" name="email" placeholder="Email" required><br>
    <input type="password" name="password" placeholder="Password" required><br>
    <button type="submit">Sign In</button>
</form>
<p style="color:red;">{{ message or "" }}</p>
</div>
</body>
</html>
'''

# Chat page
chat_html = '''
<!DOCTYPE html>
<html>
<head>
<title>Coach Joel AI</title>
<style>
body { font-family: Arial; background: #eaeaea; display:flex; justify-content:center; padding-top:50px; }
.chat-box { width: 90%; max-width: 600px; background: white; padding: 20px; border-radius: 12px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
textarea { width: 100%; height: 100px; margin-top: 10px; padding: 10px; border-radius: 8px; border: 1px solid #ccc; }
button { background: #007BFF; color: white; padding: 10px 20px; border: none; border-radius: 6px; cursor: pointer; margin-top: 10px; }
.response { background: #f5f5f5; padding: 15px; border-radius: 8px; margin-top: 20px; }
input[type=file] { margin-top: 10px; }
</style>
</head>
<body>
<div class="chat-box">
    <h2>Coach Joel AI 🤖</h2>
    <form method="POST" enctype="multipart/form-data">
        <textarea name="message" placeholder="Type your question here..." required></textarea><br>
        <input type="file" name="image"><br>
        <button type="submit">Send</button>
    </form>
    {% if response %}
        <div class="response">
            <strong>Response:</strong><br>{{ response }}
        </div>
    {% endif %}
    <p><a href="/logout">Logout</a></p>
</div>
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
            return redirect(url_for('chat'))
        else:
            return render_template_string(signin_html, message="❌ Invalid credentials.")
    return render_template_string(signin_html, message=None)

@app.route('/chat', methods=['GET', 'POST'])
def chat():
    if not session.get('logged_in'):
        return redirect(url_for('signin'))

    response_text = None
    if request.method == 'POST':
        user_input = request.form['message']
        image = request.files.get('image')

        data = {
            "contents": [{
                "parts": [{"text": SYSTEM_PROMPT + "\nUser: " + user_input}]
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
            res = requests.post(f"{GEMINI_ENDPOINT}?key={API_KEY}", json=data)
            res.raise_for_status()
            response_text = res.json()['candidates'][0]['content']['parts'][0]['text']
        except Exception as e:
            response_text = f"⚠️ Error: {e}"

    return render_template_string(chat_html, response=response_text)

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('signin'))

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 8080))
    app.run(host="0.0.0.0", port=port)
