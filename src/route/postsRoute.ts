import Router from 'express-promise-router';
const router = Router();
import { getPosts, savePost, updatePost, deletePost } from '../service/postsService';

router.put('/posts/:id', async (req, res) => {
  const post = req.body;
  const { rows } = await updatePost(req.params.id, post);
  res.end();
})

router.delete('/posts/:id', async (req, res) => {
  await deletePost(req.params.id);
  res.end();
})

router.get('/posts', async (req, res) => {
  const { rows } = await getPosts();
  res.json(rows);
})

router.post('/posts', async (req, res) => {
  const post = req.body;
  const { rows } = await savePost(post);
  res.json(rows[0]);
})

export { router }

