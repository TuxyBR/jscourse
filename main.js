import { moo } from "./moo.js";
import cowsay from "cowsay"
console.log(cowsay.say({
  text:moo()
}))