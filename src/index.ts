import { SearchDocument } from "./types";

type SearchFunc = (d: SearchDocument[], string) => SearchDocument[]
export const search: SearchFunc = (d, s) => {
  return d;
}
