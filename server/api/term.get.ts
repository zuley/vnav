import {useThumbnail, useTermCms} from "../../composables/useCms";
export default defineEventHandler(async (e) => {
  try {
    const Terms = await useTermCms().readByQuery({
      limit: 20
    })
    return {
      code: '0',
      data: Terms.data || []
    }
  } catch (error) {
    console.log('error', error)
    return sendError(e, createError({
      statusCode: 500,
      statusMessage: (error as any).errors[0].message
    }))
  }
})