const { baseURL } = require('./constants')
const axios = require('axios')

function getSnack(id) {
  return axios.get(`${baseURL}/api/snacks/${id}`).then((result) => {
    console.log(result)
    return result.data.snacks
  })
}

module.exports = { 
  getSnack,
}
