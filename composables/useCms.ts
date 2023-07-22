import {Directus, ID, RelationItem} from '@directus/sdk';
import {Text} from "domhandler";

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

export type MenuPosition = {
  id: ID
  name: string
  code: string
}

export type Menu = {
  id: ID
  status: string
  name: string
  target: '_blank' | '_self'
  position: MenuPosition
  parent: Menu
  url: string
}

export type Term = {
  id: ID
  name: string
  slug: string
  icon?: string
  desc?: string
  parent?: Term
}

export type Post = {
  id: ID
  status?: string
  title: string
  type: string
  slug: string
  cover: RelationItem<{ id: string }>
  desc: string
  comment_status: boolean
  password: string
  content_artivle?: string
  content_photo?: string
  tags: string
  term: RelationItem<Term>[]
  postmate: Postmate[]
  github?: string
}

export type Postmate = {
  id: ID
  post_id: Post
  key: string
  value: string
}

type MyCollections = {
  option: Option
  menu: Menu
  menu_position: MenuPosition
  term: Term
  post: Post
  postmate: Postmate
}

const cms = new Directus<MyCollections>('https://admin.vnav.link');

export const useOptionCms = () => {
  return cms.items('option')
}

export const useMenuCms = () => {
  return cms.items('menu')
}

export const useMenuPosition = () => {
  return cms.items('menu_position')
}

export const usePostCms = () => {
  return cms.items('post')
}

export const useTermCms = () => {
  return cms.items('term')
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