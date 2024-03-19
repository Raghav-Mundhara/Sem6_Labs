from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId

app = Flask(__name__)

client = MongoClient('mongodb://localhost:27017/')
db = client['students']
collection = db['students_info']


@app.route('/')
def index():
    students = collection.find()
    return render_template('index.html', students=students)

@app.route('/create', methods=['POST'])
def create():
    data = request.form.to_dict()
    collection.insert_one(data)
    return jsonify({'msg': 'Student added successfully'}), 200

@app.route('/update/<string:id>', methods=['POST'])
def update(id):
    data = request.form.to_dict()
    updated = collection.update_one({'_id': ObjectId(id)}, {'$set': data})
    if updated.modified_count > 0:
        return jsonify({'msg': 'Student updated successfully'}), 200
    else:
        return jsonify({'error': 'Student not found'}), 404

@app.route('/delete/<string:id>', methods=['POST'])
def delete(id):
    deleted = collection.delete_one({'_id': ObjectId(id)})
    if deleted.deleted_count > 0:
        return jsonify({'msg': 'Student deleted successfully'}), 200
    else:
        return jsonify({'error': 'Student not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
