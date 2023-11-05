import flask
import chiles_tools.headline_curl

app = flask.Flask(__name__)

@app.route("/headline", methods=["GET"])
def return_headline():
    headline_response = chiles_tools.headline_curl.get_headline()
    return flask.jsonify(headline=headline_response)

if __name__ == '__main__':
    app.run()