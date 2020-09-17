import { schema } from 'nexus'

schema.extendType({
  type: 'Query',
  definition(t) {
    t.list.field('filterPosts', {
      type: 'Post',
      args: {
        searchString: schema.stringArg({ nullable: true }),
      },
      resolve: (parent, { searchString }, ctx) => {
        return ctx.db.post.findMany({
          where: {
            OR: [
              {
                title: {
                  contains: searchString,
                },
              },
              {
                content: {
                  contains: searchString,
                },
              },
            ],
          },
        })
      },
    })
  },
})
