import Router from 'express';
const router = Router();
import { getPosts, savePost, updatePost, deletePost } from '../service/postsService';

router.get('/posts', async (req, res) => {
  const posts = await getPosts();
  res.json(posts);
})

router.post('/posts', async (req, res) => {
  const post = req.body;
  const newPost = await savePost(post);
  res.json(newPost);
})

router.put('/posts/:id', async (req, res) => {
  const post = req.body;
  await updatePost(req.params.id, post);
  res.end();
})

router.delete('/posts/:id', async (req, res) => {
  await deletePost(req.params.id);
  res.end();
})



export { router }

