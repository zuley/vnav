import {useThumbnail, usePostCms} from "../../../composables/useCms";
export default defineEventHandler(async (e) => {
  try {
    let { slug } = getQuery(e)

    const Posts = await usePostCms().readByQuery({
      fields: '*.*',
      filter: {
        slug: {
          _eq: slug
        }
      }
    })
    return {
      code: '0',
      data: Posts.data![0] || null
    }
  } catch (error) {
    console.log('error', error)
    return sendError(e, createError({
      statusCode: 500,
      statusMessage: (error as any).errors[0].message
    }))
  }
})