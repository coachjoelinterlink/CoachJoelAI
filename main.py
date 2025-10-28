from flask import Flask, render_template, request
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

# Load admin credentials
ADMIN_EMAIL = os.getenv("ADMIN_EMAIL")
ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD")

@app.route('/')
def home():
    return '''
        <h2>Coach Joel AI Your Personal AI InterLink Assistant</h2>
        <p><a href="/signin">Go to Sign-In Page</a></p>
    '''

@app.route('/signin', methods=['GET', 'POST'])
def signin():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        if email == ADMIN_EMAIL and password == ADMIN_PASSWORD:
            return render_template('signin.html', message="✅ Login successful!")
        else:
            return render_template('signin.html', message="❌ Invalid credentials.")
    return render_template('signin.html', message=None)

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 8080))
    app.run(host="0.0.0.0", port=port)

