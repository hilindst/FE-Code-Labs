/* setTimeout(()=> {
  console.log("HEllo")
}, 100)


const logHello = () => {
  console.log("Hello")
}
setTimeout(logHello, 100)

 */
//What Order?
console.log("1");//first

setTimeout(()=> {
  console.log("2")//third
}, 0)
console.log("3");//second