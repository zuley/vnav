import {useOptionCms, Option, useThumbnail} from "../../../composables/useCms";
export default defineEventHandler(async (e) => {
  try {
    const options = await useOptionCms().readByQuery({
      limit: 20
    })
    return {
      code: '0',
      data: options.data?.map((option) => {
        return {
          name: option.name,
          code: option.code,
          value: formatOptionValue(option)
        }
      }) ?? []
    }
  } catch (error) {
    return sendError(e, createError({
      statusCode: 500,
      statusMessage: '获取配置项失败'
    }))
  }
})

// 格式化 value 值
function formatOptionValue(option: Option): string {
  if (option.type === 'pic') {
    return useThumbnail(option.value_pic)
  }
  return (option as any)[`value_${option.type}`]
}