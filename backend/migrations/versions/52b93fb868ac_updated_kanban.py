"""updated kanban

Revision ID: 52b93fb868ac
Revises: d60b859748fb
Create Date: 2021-06-20 19:05:06.327510

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '52b93fb868ac'
down_revision = 'd60b859748fb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index('ix_kanbanItem_description', table_name='kanbanItem')
    op.drop_table('kanbanItem')
    op.add_column('kanban', sa.Column('kanban_items', sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('kanban', 'kanban_items')
    op.create_table('kanbanItem',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('name', sa.VARCHAR(length=45), nullable=False),
    sa.Column('description', sa.TEXT(), nullable=True),
    sa.Column('position', sa.VARCHAR(length=10), nullable=True),
    sa.Column('kanban_id', sa.INTEGER(), nullable=False),
    sa.ForeignKeyConstraint(['kanban_id'], ['kanban.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index('ix_kanbanItem_description', 'kanbanItem', ['description'], unique=False)
    # ### end Alembic commands ###
