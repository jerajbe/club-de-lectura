"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

#Create flask app
api = Blueprint('app', __name__)

@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    # if email is None or password is None: return jsonify(
    #     "revise el payload de su solicitud"
    # ), 400
    user =  User.query.filter_by(email = email, password=password).one_or_none()
    if user is None:
        return jsonify({"msg": "Bad username or password"}), 401
    access_token = create_access_token(identity=user.id)
    return jsonify(access_token=access_token), 200

@api.route("/private", methods=['GET', 'POST'])
@jwt_required()
def get_hello():
    email = get_jwt_identity()
    dictionary = {
        "message":f"hello world {email}"
    }
    return jsonify(dictionary), 200

@api.route("/users", methods=["POST"])
def handle_users():
    body = request.json
    email = body.get('email', None)
    password = body.get('password', None)
    if email is None or password is None: return jsonify(
        "revise el payload de su solicitud"
    ), 400
    new_user = User(email, password)
    return jsonify(new_user.serialize()), 201