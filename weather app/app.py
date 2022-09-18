from flask import Flask, render_template,url_for
app = Flask(__name__)

# @app.route('/')
# def login():
#     return render_template('login.html')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/otherPlaces')
def others():
    return render_template('otherplace.html')

@app.route('/chats')
def chatbot():
    return render_template('chatbot.html')

if __name__ == '__main__':
    app.run()
