import axios, { AxiosResponse } from "axios";
//jest.mock("axios");


test('Should get posts', async function() {
  const res = await axios.get('http://localhost:3000/posts')
  console.log(res.data)
});
