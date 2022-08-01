import express from 'express';
import { router } from './route/postsRoute'

const app = express();

app.use(express.json());
app.use('/', router);

app.listen(3000, () => {
  console.log('server is runnig on port 3000')
})

// import gameClass from './server';
// import { getName } from './server';

// const game = new gameClass();

// game.show();
// getName();

