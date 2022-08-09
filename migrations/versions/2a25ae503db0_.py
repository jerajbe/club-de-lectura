"""empty message

Revision ID: 2a25ae503db0
Revises: ca3e20621d26
Create Date: 2022-08-09 20:48:59.274792

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2a25ae503db0'
down_revision = 'ca3e20621d26'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('want_read_books', sa.Column('google_books_id', sa.String(length=250), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('want_read_books', 'google_books_id')
    # ### end Alembic commands ###
