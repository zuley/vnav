import {useFetch} from "#app";


export default async function (params: {
  termSlug?: string
  page?: number
  limit?: number
  keyword?: string
} = {}) {
  const termSlug = ref(params.termSlug || '')
  const page = ref(params.page || 1)
  const limit = ref(params.limit || 20)
  const keyword = ref(params.keyword || '')
  const res = await useFetch('/api/post/list', {
    params: {
      termSlug,
      page,
      limit,
      keyword
    }
  })
  const count = computed(() => res.data.value!.data.count)
  const list = computed(() => res.data.value!.data.list)
  const allPages = computed(() => Math.ceil(count.value / limit.value))
  return { res, termSlug, page, limit, keyword, list, count, allPages }
}

export async function usePostDetail (slug: string) {
  const res = await useFetch('/api/post/detail', {
    params: {
      slug
    }
  })
  const post = computed(() => res.data.value!.data)
  return { res, post }
}