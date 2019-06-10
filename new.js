const first = () => {
  console.log("first")
}

// const second = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       console.log("second")
//       resolve()
//     }, 300)
//   }) 
// }

const second = (time) => {
  return new Promise((resolve, reject) => 
    setTimeout(() => {
    console.log("second")
    resolve()
  }, time))
}

const secondAsync = async (time, fn) => {
  await second(time)
  fn()
}

const third = () => {
  console.log("third")
}

first()
secondAsync(300, () => third())

