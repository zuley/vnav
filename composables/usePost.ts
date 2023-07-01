import {useFetch} from "#app";


export default async function (params: {
  termSlug?: string
  page?: number
  limit?: number
} = {}) {
  const termSlug = ref(params.termSlug || '')
  const page = ref(params.page || 1)
  const limit = ref(params.limit || 20)
  const res = await useFetch('/api/post/list', {
    params: {
      termSlug,
      page,
      limit
    }
  })
  const count = computed(() => res.data.value!.data.count)
  const list = computed(() => res.data.value!.data.list)
  const allPages = computed(() => Math.ceil(count.value / limit.value))
  return { res, termSlug, page, limit, list, count, allPages }
}