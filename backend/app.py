from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)


app.config['MONGO_URI'] = 'mongodb+srv://Rithik_Suthan_S:8098329762@cluster0.nwyrzl2.mongodb.net/Student?retryWrites=true&w=majority'
mongo = PyMongo(app)


@app.route('/students', methods=['POST'])
def add_student():
    student = request.json
    if not student:
        return jsonify({'error': 'No student data provided.'}), 400
    inserted_id = mongo.db.students.insert_one(student).inserted_id
    return jsonify({'id': str(inserted_id)}), 201


@app.route('/view_all', methods=['GET'])
def get_all_students():
    students = list(mongo.db.students.find())
    # convert the ObjectId to string for each student
    for student in students:
        student["_id"] = str(student["_id"])
    return jsonify(students)


@app.route('/students/<rno>', methods=['GET'])
def get_student_details(rno):
    student = mongo.db.students.find_one({'rno': rno})
    if student:
        # Convert ObjectId to string before returning the JSON response
        student['_id'] = str(student['_id'])
        return jsonify(student)
    else:
        return jsonify({'message': 'Student not found'})


@app.route('/update_student/<rno>', methods=['PUT'])
def update_student(rno):
    student = mongo.db.students.find_one({'rno': rno})
    if student:
        student_id = student['_id']
        new_data = request.json
        mongo.db.students.update_one(
            {'_id': ObjectId(student_id)}, {"$set": new_data})
        return jsonify({'message': 'Student details updated successfully'})
    else:
        return jsonify({'message': 'Student not found'})


@app.route('/delete/<rno>', methods=['DELETE'])
def delete_student(rno):
    result = mongo.db.students.delete_one({'rno': rno})
    if result.deleted_count == 1:
        return jsonify({'message': 'Student record deleted successfully'})
    else:
        return jsonify({'message': 'No student record found with the given roll number'}), 404


if __name__ == '__main__':
    app.run(debug=True)
