import { schema } from 'nexus'
import { getUserId } from '../../utils'

schema.extendType({
  type: 'Query',
  definition(t) {
    t.field('me', {
      type: 'User',
      nullable: true,
      resolve: (parent, args, ctx) => {
        const userId = getUserId(ctx.token)
        if (!userId) {
          throw new Error('Invalid userId')
        }
        return ctx.db.user.findOne({
          where: {
            id: parseInt(userId),
          },
        })
      },
    })
  },
})
