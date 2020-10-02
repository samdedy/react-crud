import axios from 'axios'

export default axios.create({
    baseURL:"http://localhost/cicool/api",
    headers: {
        "x-api-key" : "5D6197C546B7C830D69655A692B1A6AC"
      }
})