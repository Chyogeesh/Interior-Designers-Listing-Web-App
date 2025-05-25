from flask import Flask, jsonify
import json
import os

app = Flask(__name__)

# Load designers data
def load_designers():
    with open('data/designers.json', 'r') as f:
        return json.load(f)

@app.route('/api/designers', methods=['GET'])
def get_designers():
    designers = load_designers()
    return jsonify(designers)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
