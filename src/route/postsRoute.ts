import Router from 'express-promise-router';
const router = Router();
import postsService from '../service/postsService';

router.get('/posts', async (req, res) => {
  const { rows } = await postsService();
  res.send(rows);
})

router.get('/posts:id', async (req, res) => {
  const { id } = req.params;
  res.send(id)
})


router.post('/posts', async (req, res) => {
  res.send('Luna')
})

router.put('/posts:id', async (req, res) => {
  res.send('Luna')
})

router.delete('/posts:id', async (req, res) => {
  res.send('Luna')
})



// router.get('/:name', async (req, res) => {
//   const { name } = req.params;
//   const { rows } = await pool.query('select * from city where name = $1', [name]);
//   res.send(rows[0]);
// })

export { router }

