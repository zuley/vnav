import {useOptionCms} from "../../../composables/useCms";
export default defineEventHandler(async (event) => {
  const option = await useOptionCms().readOne(2)
  console.log(option)
  return {
    api: option
  }
})