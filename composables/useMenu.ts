import {useFetch} from "#app";

type MenuCode = 'TOP'
  | 'FOOTER'


export default function (code: MenuCode) {
  return useFetch('/api/menu', {
    query: {
      code
    }
  })
}