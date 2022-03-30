const asyncModule = require('./asyncModule');

const getDelayedData = asyncModule.getDelayedData;

const resultHandler = (val) => {
  console.log(val)
}

// console.log('start')
// getDelayedData('hello').then(resultHandler)
// console.log('end')

  (async () => {

    console.log('start')
    const result = await getDelayedData('hello')
    console.log(result)
    console.log('end')


  })()
