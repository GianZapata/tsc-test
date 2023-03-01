import express from 'express';
import { testHelper } from './helpers/test.helper';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(3000, () => {
  testHelper()
   console.log('Server is running on port 3000');
});
