"""updated users tabe

Revision ID: 0f572ec84033
Revises: 7ddc419ae235
Create Date: 2021-05-20 19:13:50.882828

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0f572ec84033'
down_revision = '7ddc419ae235'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('password', sa.String(length=128), nullable=True))
    op.drop_column('user', 'password_hash')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('password_hash', sa.VARCHAR(length=128), nullable=True))
    op.drop_column('user', 'password')
    # ### end Alembic commands ###
