"""simplified models

Revision ID: a134659883a6
Revises: edcfeb4f53ab
Create Date: 2021-06-02 13:23:05.265112

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a134659883a6'
down_revision = 'edcfeb4f53ab'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index('ix_chat_history', table_name='chat')
    op.drop_table('chat')
    op.drop_index('ix_permission_moderator', table_name='permission')
    op.drop_table('permission')
    op.add_column('kanbanItem', sa.Column('name', sa.String(length=45), nullable=False))
    op.drop_column('kanbanItem', 'nome')
    op.add_column('project', sa.Column('history', sa.String(), nullable=True))
    op.create_index(op.f('ix_project_history'), 'project', ['history'], unique=False)
    op.add_column('user', sa.Column('moderator', sa.Boolean(), nullable=True))
    op.create_index(op.f('ix_user_moderator'), 'user', ['moderator'], unique=False)
    op.drop_constraint(None, 'userInProject', type_='foreignkey')
    op.drop_column('userInProject', 'permission_id')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('userInProject', sa.Column('permission_id', sa.INTEGER(), nullable=True))
    op.create_foreign_key(None, 'userInProject', 'permission', ['permission_id'], ['id'])
    op.drop_index(op.f('ix_user_moderator'), table_name='user')
    op.drop_column('user', 'moderator')
    op.drop_index(op.f('ix_project_history'), table_name='project')
    op.drop_column('project', 'history')
    op.add_column('kanbanItem', sa.Column('nome', sa.VARCHAR(length=45), nullable=False))
    op.drop_column('kanbanItem', 'name')
    op.create_table('permission',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('moderator', sa.BOOLEAN(), nullable=True),
    sa.Column('add_user', sa.VARCHAR(length=64), nullable=True),
    sa.Column('Remove_user', sa.VARCHAR(length=64), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index('ix_permission_moderator', 'permission', ['moderator'], unique=False)
    op.create_table('chat',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('history', sa.VARCHAR(), nullable=True),
    sa.Column('project_id', sa.INTEGER(), nullable=False),
    sa.ForeignKeyConstraint(['project_id'], ['project.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index('ix_chat_history', 'chat', ['history'], unique=False)
    # ### end Alembic commands ###
