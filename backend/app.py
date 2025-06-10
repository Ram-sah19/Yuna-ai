from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS
import os
from dotenv import load_dotenv
from bson.objectid import ObjectId
from flask_bcrypt import Bcrypt
from datetime import datetime

load_dotenv()

app = Flask(__name__)
CORS(app)

# Configure MongoDB
app.config['MONGO_URI'] = os.getenv('MONGODB_URI', 'mongodb://localhost:27017/tamil_tours')
mongo = PyMongo(app)
bcrypt = Bcrypt(app)

# User model
users = mongo.db.users
places = mongo.db.places

@app.route('/')
def index():
    return jsonify({
        'message': 'Welcome to Tamil Nadu Tourist Places API',
        'endpoints': {
            'register': '/api/register (POST)',
            'login': '/api/login (POST)',
            'places': '/api/places (GET, POST)',
            'place': '/api/places/<id> (GET, PUT, DELETE)'
        }
    })

@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    if not data or not all(key in data for key in ['name', 'email', 'password']):
        return jsonify({'error': 'Missing required fields'}), 400
    
    existing_user = users.find_one({'email': data['email']})
    if existing_user:
        return jsonify({'error': 'User already exists'}), 400
    
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    user_data = {
        'name': data['name'],
        'email': data['email'],
        'password': hashed_password,
        'created_at': datetime.utcnow()
    }
    
    users.insert_one(user_data)
    return jsonify({'message': 'User registered successfully', 'user_id': str(user_data['_id'])}), 201

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    if not data or not all(key in data for key in ['email', 'password']):
        return jsonify({'error': 'Missing required fields'}), 400
    
    user = users.find_one({'email': data['email']})
    if user and bcrypt.check_password_hash(user['password'], data['password']):
        return jsonify({
            'message': 'Login successful',
            'user_id': str(user['_id']),
            'name': user['name']
        }), 200
    
    return jsonify({'error': 'Invalid credentials'}), 401

@app.route('/api/places', methods=['GET'])
def get_places():
    place_list = []
    for place in places.find():
        place['_id'] = str(place['_id'])
        place_list.append(place)
    return jsonify(place_list)

@app.route('/api/places/<place_id>', methods=['GET'])
def get_place(place_id):
    place = places.find_one({'_id': ObjectId(place_id)})
    if place:
        place['_id'] = str(place['_id'])
        return jsonify(place)
    return jsonify({'error': 'Place not found'}), 404

@app.route('/api/places', methods=['POST'])
def add_place():
    data = request.get_json()
    required_fields = ['name', 'description', 'location', 'district']
    if not data or not all(field in data for field in required_fields):
        return jsonify({'error': 'Missing required fields'}), 400
    
    new_place = {
        'name': data['name'],
        'description': data['description'],
        'location': data['location'],
        'district': data['district'],
        'image_url': data.get('image_url'),
        'rating': data.get('rating'),
        'entry_fee': data.get('entry_fee'),
        'opening_hours': data.get('opening_hours'),
        'created_at': datetime.utcnow()
    }
    result = places.insert_one(new_place)
    return jsonify({'message': 'Place added successfully', 'id': str(result.inserted_id)}), 201

@app.route('/api/places/<place_id>', methods=['PUT'])
def update_place(place_id):
    data = request.get_json()
    if not data:
        return jsonify({'error': 'No data provided'}), 400
    
    result = places.update_one(
        {'_id': ObjectId(place_id)},
        {'$set': data}
    )
    if result.modified_count > 0:
        return jsonify({'message': 'Place updated successfully'}), 200
    return jsonify({'error': 'Place not found'}), 404

@app.route('/api/places/<place_id>', methods=['DELETE'])
def delete_place(place_id):
    result = places.delete_one({'_id': ObjectId(place_id)})
    if result.deleted_count > 0:
        return jsonify({'message': 'Place deleted successfully'}), 200
    return jsonify({'error': 'Place not found'}), 404

if __name__ == '__main__':
    app.run(debug=True, port=5000)
