# make sure this is correct — no openai import here!
from flask import Flask, request, render_template, redirect, url_for, session, flash
from dotenv import load_dotenv
import os, requests, base64

load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv("SECRET_KEY", "your-secret-key")  # Needed for session management

# Load admin credentials
ADMIN_EMAIL = os.getenv("ADMIN_EMAIL")
ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD")

# Set up your API key (replace with your AI provider)
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route('/')
def home():
    return '''
        <h2>Please check Sign-In to start</h2>
        <p><a href="/signin">Go to Sign-In Page</a></p>
    '''

@app.route('/signin', methods=['GET', 'POST'])
def signin():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        if email == ADMIN_EMAIL and password == ADMIN_PASSWORD:
            session['logged_in'] = True
            return redirect(url_for('chat'))
        else:
            return render_template('signin.html', message="❌ Invalid credentials.")
    return render_template('signin.html', message=None)

@app.route('/chat', methods=['GET', 'POST'])
def chat():
    if not session.get('logged_in'):
        return redirect(url_for('signin'))

    response_text = None
    if request.method == 'POST':
        user_input = request.form['message']
        try:
            # Simple OpenAI API call (you can adapt for your provider)
            completion = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "You are Coach Joel AI, a helpful assistant."},
                    {"role": "user", "content": user_input}
                ]
            )
            response_text = completion.choices[0].message["content"]
        except Exception as e:
            response_text = f"⚠️ Error: {str(e)}"

    return render_template('chat.html', response=response_text)

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('signin'))

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 8080))
    app.run(host="0.0.0.0", port=port)

