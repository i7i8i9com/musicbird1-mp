import { get } from "./require"

export const sayHello=()=>{
  return get('/hello')
}