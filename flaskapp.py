# from flask import Flask
import flask
app = flask.Flask(__name__)

@app.route('/')
def root_page():
	# return flask.render_template('index.html', active_page="index")
	return flask.render_template('index2.html', active_page="index")

@app.route('/co_jsme')
def co_jsme_page():
 	return flask.render_template('co_jsme.html', active_page="co_jsme")

@app.route('/co_pujcujeme')
def co_pujcujeme_page():
 	return flask.render_template('co_pujcujeme.html', active_page="co_pujcujeme")

@app.route('/co_umime')
def co_umime_page():
 	return flask.render_template('co_umime.html', active_page="co_umime")

@app.route('/kontakt')
def kontakt_page():
 	return flask.render_template('kontakt.html', active_page="kontakt")

@app.route('/co_mame')
def co_mame_page():
	return flask.render_template('co_mame.html', active_page="co_mame")

@app.route('/admin')
def admin_page():
	return "admin page"

if __name__ == '__main__':
    app.run()
