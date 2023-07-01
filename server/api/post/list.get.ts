import {useThumbnail, usePostCms} from "../../../composables/useCms";
import superjson from "superjson";
export default defineEventHandler(async (e) => {
  try {
    let { termSlug, limit = 20, page = 1 } = getQuery(e)
    // 查询参数
    const queryObj: any = {
      fields: '*.*',
      limit,
      page,
      filter: {},
      meta: 'filter_count'
    }
    // 如果有分类别名参数则组装分类查询
    if (termSlug) {
      queryObj.filter['term'] = {
        'term_id': {
          'slug': {
            '_in': String(termSlug).split(',')
          }
        }
      }
    }
    const Posts = await usePostCms().readByQuery(queryObj)
    return {
      code: '0',
      data: {
        list: Posts.data || [],
        count: Posts.meta?.filter_count
      }
    }
  } catch (error) {
    console.log('error', error)
    return sendError(e, createError({
      statusCode: 500,
      statusMessage: (error as any).errors[0].message
    }))
  }
})