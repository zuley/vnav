import {Directus, ID} from '@directus/sdk';

export type Option = {
  id: ID
  name: string
  status: string
  code: string
  type: string
  value_text: string
  value_md: string
  value_pic: string
  value_date: string
  value_switch: string
  value_richText: string
}

type MyCollections = {
  option: Option
}

const cms = new Directus<MyCollections>('http://101.33.224.203:8055');

export const useOptionCms = () => {
  return cms.items('option')
}
export default cms;

const host = 'http://101.33.224.203:8055'
export const useFileHost = () => host + '/assets/'

type ThumbnailOption = {
  fit?: 'cover' | 'contain' | 'inside' | 'outside'
  width?: number
  height?: number
  quality?: number
  withoutEnlargement?: boolean
  format?: 'jpg' | 'png' | 'webp' | 'tiff'
}
// 将图片ID转换为真实图片路径
export function useThumbnail (id: string, opt: ThumbnailOption = {}) {
  const queryStr = Object.entries(opt).reduce((all, item) => {
    return all += item[0] + '=' + item[1] + '&'
  }, "?")
  return useFileHost() + id + queryStr
}