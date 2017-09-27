# [nest-tensorflow](https://codelabs.developers.google.com/codelabs/nest-camera-api/)

[https://codelabs.developers.google.com/codelabs/nest-camera-api/](https://codelabs.developers.google.com/codelabs/nest-camera-api/)

# Spin up a virtual environment:
L/W $ pip install virtualenv
L/W $ virtualenv env
Linux $ . env/bin/activate
Windows >env\Scripts\actiave.bat

Install the dependencies. Omit the --user flag is you are using a virtual environment.

Install the dependencies (virtualenv):
(env) $ pip install -r requirements.txt

(non-virtualenv):
$ pip install --user -r requirements.txt

# PYTHON 3 CHANGES
In codelab\classify.py, wwn\access_token.py, and wwn\camera.py
replace:
import urllib2

with:
try:
	import urllib.request as urllib2
except ImportError:
	import urllib2
	

In classify.py
replace:
from node_lookup import NodeLookup

with:
from codelab.node_lookup import NodeLookup

In wwn\access_token.py
replace:
query = urllib.urlencode({

with:
query = urllib.parse.urlencode({
and:
data = urllib.urlencode({
with:
data = urllib.parse.urlencode({

# Run the app
Start the virtual environment
L/W $ python app.py

Navigate to http://localhost:5000/

