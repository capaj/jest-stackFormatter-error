const axios = require('axios')

it('fails', async () => {
  await axios.post('/user/resetPassword', {})
})