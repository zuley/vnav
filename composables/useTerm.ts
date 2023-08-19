import {useFetch} from "#app";
import {Term} from "~/composables/useCms";


export default function () {
  return useState<Term[]>('terms')
}