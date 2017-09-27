#!/usr/bin/python
#
# Copyright 2017 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
from flask import Flask, jsonify, redirect, request, url_for, render_template
import codelab
import wwn
from errors import APIError

app = Flask(__name__)

token_file = 'tmp/token.txt'
token = ""

@app.route('/')
def index():
    global token
    if token == "":
        return render_template('index.html')

    # Return HTML
    return render_template('application.html', has_token=True)

@app.route('/login')
def login():
    return redirect(wwn.authorization_url())

@app.route('/callback')
def callback():
    authorization_code = request.args.get("code")
 
    global token
    token = wwn.get_access_token(authorization_code)
    store_token(token)
 
    return redirect(url_for('index'))

@app.route('/logout')
def logout():
    global token
    token = ""
    store_token(token)

    return redirect(url_for('index'))

@app.route('/api')
def api():
    global token
    if token == "":
        return "", 400
 
    try:
        image_url = wwn.fetch_snapshot_url(token)
    except APIError as err:
        return jsonify(err.result)
 
    return jsonify(codelab.classify_remote_image(image_url))

def store_token(token):
    with open(token_file, "w") as f:
        f.write(token)

def fetch_token():
    try:
        with open(token_file, 'r') as f:
            return f.read().replace('\n', '')
    except IOError:
        return ""

if __name__ == "__main__":
    #token = fetch_token()
    app.run(debug=True, host='0.0.0.0')
