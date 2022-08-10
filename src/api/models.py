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
    user_name = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    phone_number = db.Column(db.String(80), unique=False, nullable=True)
    address = db.Column(db.String(150), unique=False, nullable=True)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    comment = db.relationship("Comment", back_populates="user")
    exchange_book = db.relationship("ExchangeBook", back_populates="user")
    want_read_book = db.relationship("WantReadBook", back_populates="user")

    def __init__(self, user_name, phone_number, address, email, password):
        self.user_name = user_name
        self.phone_number = phone_number
        self.address = address
        self.email = email
        self.password = password
        self.is_active = False
        db.session.add(self)
        db.session.commit()

    def __repr__(self):
        return f'<User {self.user_name}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_name": self.user_name,
            "phone_number": self.phone_number,
            "address": self.address,
            "email": self.email,
            "is_active": self.is_active
            # do not serialize the password, its a security breach
        }

class WantReadBook(db.Model):
    __tablename__ = 'want_read_book'
    id = db.Column(db.Integer, primary_key=True)
    user = db.relationship("User", back_populates="want_read_book")
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    book_id = db.Column(db.Integer, db.ForeignKey("book.id"))
    book_cover = db.Column(db.String(500), nullable=True) 
    book_name = db.Column(db.String(250), nullable=True)
    book = db.relationship("Book", back_populates="want_read_book")
    google_books_id = db.Column(db.String(250), nullable=False)

    def __init__(self, user_id, book_id, book_name, book_cover, google_books_id):
        self.user_id = user_id
        self.book_id = book_id
        self.book_name = book_name
        self.book_cover = book_cover
        self.google_books_id = google_books_id
        db.session.add(self)
        db.session.commit()

    def serialize(self):
        return {
            "id": self.id,
            "book_id": self.book_id,
            "user_id": self.user_id,
            "book_cover": self.book_cover,
            "book_name": self.book_name,
            "google_books_id": self.google_books_id
        }
class ExchangeBook(db.Model):
    __tablename__ = 'exchange_book'
    id = db.Column(db.Integer, primary_key=True)
    id = db.Column(db.Integer, primary_key=True)
    user = db.relationship("User", back_populates="exchange_book")
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    book_id = db.Column(db.Integer, db.ForeignKey("book.id"))
    book_cover = db.Column(db.String(500), nullable=True) 
    book_name = db.Column(db.String(250), nullable=True)
    book = db.relationship("Book", back_populates="exchange_book")
    google_books_id = db.Column(db.String(250), nullable=False)

    def __init__(self, user_id, book_id, book_name, book_cover, google_books_id):
        self.user_id = user_id
        self.book_id = book_id
        self.book_name = book_name
        self.book_cover = book_cover
        self.google_books_id = google_books_id
        db.session.add(self)
        db.session.commit()

    def serialize(self):
        return {
            "id": self.id,
            "book_id": self.book_id,
            "user_id": self.user_id,
            "book_cover": self.book_cover,
            "book_name": self.book_name,
            "google_books_id": self.google_books_id
        }

class Book(db.Model):
    __tablename__ = 'book'
    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.String(250), nullable=False)
    name = db.Column(db.String(250), nullable=False)
    authors = db.Column(db.String(250), nullable=False)
    cover = db.Column(db.String(250), nullable=False)
    year = db.Column(db.String(250), nullable=False)
    comments = db.relationship("Comment", back_populates="book")
    exchange_book = db.relationship("ExchangeBook", back_populates="book")
    want_read_book = db.relationship("WantReadBook", back_populates="book")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "rating":self.rating,
            "authors":self.authors,
            "cover":self.cover,
            "year":self.year,
            "comments": [c.serialize() for c in self.comments]
        }

class Comment(db.Model):
    __tablename__ = 'comment'
    id = db.Column(db.Integer, primary_key=True)
    user = db.relationship("User", back_populates="comment")
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    book_id = db.Column(db.Integer, db.ForeignKey("book.id"))
    google_books_id = db.Column(db.String(120), nullable=False)
    content = db.Column(db.String(1500), nullable=False)
    book = db.relationship("Book", back_populates="comments")

    def __init__(self, user_id, google_books_id, book_id, content):
        self.user_id = user_id
        self.google_books_id = google_books_id
        self.book_id = book_id
        self.content = content
        db.session.add(self)
        db.session.commit()

    def serialize(self):
        return {
            "id": self.id,
            "user_name": self.user.user_name,
            "content": self.content,
            "user_id": self.user_id,
            "google_books_id": self.google_books_id,
            "book_id": self.book_id
        }