#from flask import Flask
#application = Flask(__name__)

from flaskapp import app as application

#@application.route("/")
#def hello():
#    return "Hello World! Name is: " + str(__name__)

if __name__ == "__main__":
    application.run()
