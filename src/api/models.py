from flask_sqlalchemy import SQLAlchemy
from flask_sqlalchemy import SQLAlchemy
import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    comment = db.relationship("Comment", back_populates="user")
    favorite_books = db.relationship("FavoriteBooks", back_populates="user")

    def __init__(self, email, password):
        self.email = email
        self.password = password
        self.is_active = False
        db.session.add(self)
        db.session.commit()

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "is_active": self.is_active
            # do not serialize the password, its a security breach
        }

class FavoriteBooks(db.Model):
    __tablename__ = 'favorite_books'
    id = db.Column(db.Integer, primary_key=True)
    user = db.relationship("User", back_populates="favorite_books")
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    book_id = db.Column(db.Integer, db.ForeignKey("book.id"))
    book = db.relationship("Book", back_populates="favorite_books")

    def __init__(self, user_id, book_id):
        self.user_id = user_id
        self.book_id = book_id
        db.session.add(self)
        db.session.commit()

    def serialize(self):
        return {
            "id": self.id,
            "book_id": self.book_id,
            "user_id": self.user_id
        }

class Book(db.Model):
    __tablename__ = 'book'
    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.String(250), nullable=False)
    name = db.Column(db.String(250), nullable=False)
    authors = db.Column(db.String(250), nullable=False)
    cover = db.Column(db.String(250), nullable=False)
    year = db.Column(db.String(250), nullable=False)
    favorite_books = db.relationship("FavoriteBooks", back_populates="book")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "rating":self.rating,
            "authors":self.authors,
            "cover":self.cover,
            "year":self.year
        }

class Comment(db.Model):
    __tablename__ = 'comment'
    id = db.Column(db.Integer, primary_key=True)
    user = db.relationship("User", back_populates="comment")
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    book_id = db.Column(db.Integer, db.ForeignKey("book.id"))
    content = db.Column(db.String(250), nullable=False)

def serialize(self):
    return {
        "id": self.id,
        "content": self.content,
        "user_id": self.user_id,
        "book_id": self.book_id
    }