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
from sqlalchemy.orm import relationship

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

@api.route('/users/favorites', methods=['GET'])
def get_favorites():
    books = FavoriteBooks.query.all()
    favorites_books = list(map(
        lambda favorite_books: favorite_books.serialize(),
        books
    ))
    return jsonify(favorites_books), 200

@api.route('/books/<int:book_id>', methods=["GET"])
def list_single_book(book_id):
    book = Book.query.filter_by(id=book_id).one_or_none()
    return jsonify(book.serialize())

@api.route('/users/favorite/books/<int:book_id>', methods=['POST'])
def add_favorite_user_planet(book_id):
    body = request.json
    favorite = FavoriteBooks(
            user_id = body["users_id"] if "users_id" in body else None, 
            book_id = body["book_id"] if "book_id" in body else None
        )
    db.session.add(favorite)
    db.session.commit()
    return jsonify(favorite.serialize()), 201