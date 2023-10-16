import * as express from 'express';

const app = express();

app.get('/login', (req, res) => {
  res.send('Welcome to Login pagesadasd!');
});
app.listen(3000, () => {
  console.log('Running on server 3000!');
});
