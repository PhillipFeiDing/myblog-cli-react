from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/api/admin/login', methods=['POST'])
def api_admin_login():
    data = request.get_json()
    correctEmail = 'dingfei0518@gmail.com'
    correctPassword = 'Df990518!6'
    return jsonify({
        'data': {
            'loginSuccess': data.get('email') == correctEmail and data.get('password') == correctPassword,
        },
        'errno': 0
    })


@app.route('/api/admin/mock-post', methods=['POST'])
def api_admin_mockPost():
    data = request.get_json()
    return jsonify({
        'data': {
            'success': True if data.get('success') else False
        }
    })


if __name__ == '__main__':
    app.run(debug=True)