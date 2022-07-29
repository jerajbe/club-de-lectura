"""empty message

Revision ID: 7c5bb54f5d51
Revises: 6b4c50c71d3d
Create Date: 2022-07-28 22:58:47.249403

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7c5bb54f5d51'
down_revision = '6b4c50c71d3d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('book',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('rating', sa.String(length=250), nullable=False),
    sa.Column('name', sa.String(length=250), nullable=False),
    sa.Column('authors', sa.String(length=250), nullable=False),
    sa.Column('cover', sa.String(length=250), nullable=False),
    sa.Column('year', sa.String(length=250), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('favorite_books',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('book_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['book_id'], ['book.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('favorite_books')
    op.drop_table('book')
    # ### end Alembic commands ###