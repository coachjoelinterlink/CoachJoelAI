from flask import Flask, render_template, request, redirect, url_for
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

ADMIN_EMAIL = os.getenv("ADMIN_EMAIL")
ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD")

@app.route('/')
def home():
    return "Flask Sign-In App is Running!"

@app.route('/signin', methods=['GET', 'POST'])
def signin():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        if email == ADMIN_EMAIL and password == ADMIN_PASSWORD:
            return "✅ Login successful!"
        else:
            return "❌ Invalid credentials."
    return '''
        <form method="POST">
            <input type="email" name="email" placeholder="Email" required><br>
            <input type="password" name="password" placeholder="Password" required><br>
            <button type="submit">Sign In</button>
        </form>
    '''

if __name__ == '__main__':
    app.run()
