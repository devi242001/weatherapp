from flask import Flask,request
import requests

app = Flask(__name__)

@app.route('/chats',methods=['POST'])
def home():
    req = request.get_json(silent=True, force=True)
    fulfillmentText = ''
    query_result = req.get('queryResult')
    city = query_result.get('parameters').get('city')
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&APPID=39e5461fcd1cc77d5e735cf2cb2f180a'
    response = requests.get(url).json()
    data = response.get('weather')
    fulfillmentText = data[0]['description']
    return{
        "fulfillmentText": fulfillmentText,
        "displayText" : '25',
        "source" : "webhookdata"
    }

if __name__ == '__main__':
    app.run(debug = True)