import { schema } from 'nexus'

schema.extendType({
  type: 'Query',
  definition(t) {
    t.field('post', {
      type: 'Post',
      nullable: true,
      args: { id: schema.intArg() },
      resolve: (parent, { id }, ctx) => {
        return ctx.db.post.findOne({
          where: {
            id,
          },
        })
      },
    })
  },
})
