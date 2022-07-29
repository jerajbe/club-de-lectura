"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, FavoriteBooks, Comment, Book
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

@api.route("/comment", methods=["POST"])
def add_comment():
    user_id = request.json.get("user_id", None)
    book_id = request.json.get("book_id", None)
    content = request.json.get("content", None)
    comment = Comment(user_id, book_id, content)


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
    email = body["email"] if "email" in body else None
    password = body["password"] if "password" in body else None
    if email is None or password is None: return jsonify(
        "Ningun valor puede ser nulo"
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

@api.route('/books', methods=["POST"])
def add_book():
    body = request.json
    favorite = Book(
            rating  = body["rating"] if "rating" in body else None, 
            name = body["name"] if "name" in body else None,
            authors = body["authors"] if "authors" in body else None,
            cover = body["cover"] if "cover" in body else None,
            year = body["year"] if "year" in body else None
        )
    db.session.add(favorite)
    db.session.commit()
    return jsonify(favorite.serialize()), 201

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