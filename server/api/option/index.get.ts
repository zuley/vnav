import {useOptionCms} from "../../../composables/useCms";
export default defineEventHandler(async (event) => {
  const option = await useOptionCms().readOne(1)
  console.log(option)
  return {
    api: option
  }
})