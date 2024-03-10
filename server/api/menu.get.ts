import {useMenuCms} from "../../composables/useCms";
export default defineEventHandler(async (e) => {
  try {
    const params = getQuery(e)
    const Menus = await useMenuCms().readByQuery({
      filter: {
        position: {
          code: {
            "_eq": params.code
          }
        }
      }
    })
    return {
      code: '0',
      data: Menus.data || []
    }
  } catch (error) {
    return sendError(e, createError({
      statusCode: 500,
      statusMessage: '获取配置项失败'
    }))
  }
})