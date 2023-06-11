import {useFetch} from "#app";

type MenuCode = 'TOP'
  | 'FOOTER'


export default function (code: string) {
  return useFetch('/api/menu', {
    query: {
      code
    }
  })
}