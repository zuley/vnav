import {useFetch} from "#app";
import type {Term} from "~/composables/useCms";


export default function () {
  return useState<Term[]>('terms')
}