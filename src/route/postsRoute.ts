import Router from 'express-promise-router';

const router = Router();

router.get('/posts', async (req, res) => {
  res.send('Luna')
})

export { router }

