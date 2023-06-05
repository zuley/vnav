import {Directus, ID} from '@directus/sdk';

type Option = {
  id: ID
  name: string
}

type MyCollections = {
  option: Option
}

const cms = new Directus<MyCollections>('http://101.33.224.203:8055');

export const useOptionCms = () => {
  return cms.items('option')
}

export default cms;