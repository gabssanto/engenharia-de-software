"""fixed errors on the orm

Revision ID: edcfeb4f53ab
Revises: 9ad0cf88186e
Create Date: 2021-06-02 13:00:54.068140

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'edcfeb4f53ab'
down_revision = '9ad0cf88186e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('kanban',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('permission',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('moderator', sa.Boolean(), nullable=True),
    sa.Column('add_user', sa.String(length=64), nullable=True),
    sa.Column('Remove_user', sa.String(length=64), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_permission_moderator'), 'permission', ['moderator'], unique=False)
    op.create_table('project',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('chat',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('history', sa.String(), nullable=True),
    sa.Column('project_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['project_id'], ['project.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_chat_history'), 'chat', ['history'], unique=False)
    op.create_table('kanbanItem',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nome', sa.String(length=45), nullable=False),
    sa.Column('description', sa.Text(), nullable=True),
    sa.Column('position', sa.String(length=10), nullable=True),
    sa.Column('kanban_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['kanban_id'], ['kanban.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_kanbanItem_description'), 'kanbanItem', ['description'], unique=False)
    op.create_table('userInProject',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('project_id', sa.Integer(), nullable=True),
    sa.Column('permission_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['permission_id'], ['permission.id'], ),
    sa.ForeignKeyConstraint(['project_id'], ['project.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_index('ix_post_timestamp', table_name='post')
    op.drop_table('post')
    op.add_column('user', sa.Column('password', sa.String(length=128), nullable=True))
    op.drop_index('ix_user_username', table_name='user')
    op.create_index(op.f('ix_user_username'), 'user', ['username'], unique=False)
    op.drop_column('user', 'password_hash')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('password_hash', sa.VARCHAR(length=128), nullable=True))
    op.drop_index(op.f('ix_user_username'), table_name='user')
    op.create_index('ix_user_username', 'user', ['username'], unique=False)
    op.drop_column('user', 'password')
    op.create_table('post',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('body', sa.VARCHAR(length=140), nullable=True),
    sa.Column('timestamp', sa.DATETIME(), nullable=True),
    sa.Column('user_id', sa.INTEGER(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index('ix_post_timestamp', 'post', ['timestamp'], unique=False)
    op.drop_table('userInProject')
    op.drop_index(op.f('ix_kanbanItem_description'), table_name='kanbanItem')
    op.drop_table('kanbanItem')
    op.drop_index(op.f('ix_chat_history'), table_name='chat')
    op.drop_table('chat')
    op.drop_table('project')
    op.drop_index(op.f('ix_permission_moderator'), table_name='permission')
    op.drop_table('permission')
    op.drop_table('kanban')
    # ### end Alembic commands ###
