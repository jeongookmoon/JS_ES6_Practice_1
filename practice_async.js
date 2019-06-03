const SAMPLES = [
  { title: "First One", content: "Hello World!" },
  { title: "Second One", content: "Istrum Qont" },
  { title: "Third One", content: "Bye World!" },
]
const EX = { title: "Fourth One", content: "Wait, wait!!" }
const EX2 = { title: "Fifth One", content: "I'm here!" }


const drawSamples = () => {
  setTimeout(() => {
    let output = ""
    SAMPLES.forEach((sample, index) => {
      output += `<li>${sample.title}</li>`
    })
    document.body.innerHTML = output
  }, 1000)
}

// Callback
const addSamples = (sample, callback) => {
  setTimeout(() => {
    SAMPLES.push(sample)
    callback()
  }, 1500)
}

// Primise
const addSamplesViaPromise = (sample) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      SAMPLES.push(sample)
      const error = false
      if (!error)
        resolve()
      else
        reject("ERROR: something went")
    }, 1300)
  })
}

// Promise All
const promise1 = Promise.resolve("First Promise")
const promise2 = 123
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 1600, "Third Promise"))
const promise4 = fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json())


// Async, await
const fetchedData = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts")
  // const dataWithoutAwait = response.json()
  const dataWithAwait = await response.json()
  // console.log("dataWithoutAwait", dataWithoutAwait)
  console.log("dataWithAwait", dataWithAwait)
}

//drawSamples()

// Callback way
// addSamples(EX2, drawSamples)

// Promise way
// addSamplesViaPromise(EX).then(drawSamples)

// Promise All
Promise.all([promise1, promise2, promise3, promise4]).then(responses => console.log(responses))

// Async, await way
fetchedData()




