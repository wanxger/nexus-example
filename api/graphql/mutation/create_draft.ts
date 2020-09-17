import { schema } from 'nexus'
import { getUserId } from '../../utils'

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createDraft', {
      type: 'Post',
      args: {
        title: schema.stringArg({ nullable: false }),
        content: schema.stringArg(),
      },
      resolve: (parent, { title, content }, ctx) => {
        const userId = getUserId(ctx.token)
        if (!userId) {
          throw new Error('Invalid userId')
        }

        return ctx.db.post.create({
          data: {
            title,
            content,
            published: false,
            author: { connect: { id: Number.parseInt(userId) } },
          },
        })
      },
    })
  },
})
