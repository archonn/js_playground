const num = 100

const fetchData = () => {
  throw new Error()
}

try {
  const data = fetchData()
  console.log(data)
} catch (err) {
  console.log('Error occurred')
} finally {
  console.log('finally')
}
