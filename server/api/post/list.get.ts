import {useThumbnail, usePostCms} from "../../../composables/useCms";
import superjson from "superjson";
export default defineEventHandler(async (e) => {
  try {
    const Posts = await usePostCms().readByQuery({
      limit: 20
    })
    return {
      code: '0',
      data: Posts.data || []
    }
  } catch (error) {
    console.log('error', error)
    return sendError(e, createError({
      statusCode: 500,
      statusMessage: (error as any).errors[0].message
    }))
  }
})