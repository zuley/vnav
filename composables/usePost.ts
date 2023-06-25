import {useFetch} from "#app";


export default function () {
  return useFetch('/api/post/list')
}