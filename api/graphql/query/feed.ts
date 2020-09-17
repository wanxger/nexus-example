import { schema } from 'nexus'

schema.extendType({
  type: 'Query',
  definition(t) {
    t.list.field('feed', {
      type: 'Post',
      resolve: (parent, args, ctx) => {
        return ctx.db.post.findMany({
          where: { published: true },
        })
      },
    })
  },
})
