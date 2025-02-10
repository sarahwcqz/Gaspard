from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__);
CORS(app)

counter = 1
@app.route('/increment_counter', methods=['POST'])
def increment_counter():
    global counter
    counter = counter + 1
    return jsonify({"value":counter})

@app.route('/get_counter', methods=['GET'])
def get_counter():
    global counter
    return jsonify({"value":counter})

app.run()
