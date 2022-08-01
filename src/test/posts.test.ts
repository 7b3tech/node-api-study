import crypto from 'crypto';
import axios from "axios";
import { savePost, updatePost, deletePost, getPost, getPosts } from '../service/postsService';

const generate = function() {
  return crypto.randomBytes(20).toString('hex');
}

const request = function(url: string, method: string, data: { title: string, content: string }) {
  return axios({ url, method, data })
}

test('Should get posts', async function() {
  const { rows: post1 } = await savePost({ title: generate(), content: generate() })
  const { rows: post2 } = await savePost({ title: generate(), content: generate() })
  const { rows: post3 } = await savePost({ title: generate(), content: generate() })
  const response = await request('http://localhost:3000/posts', 'get', { title: '', content: '' })
  const posts = response.data
  expect(posts).toHaveLength(3);
  await deletePost(post1[0].id)
  await deletePost(post3[0].id)
  await deletePost(post2[0].id)
});

test('Should save posts', async function() {
  const data = { title: generate(), content: generate() }
  const response = await request('http://localhost:3000/posts', 'post', data)
  const post = response.data;
  expect(post.title).toBe(data.title);
  expect(post.content).toBe(data.content);
  await deletePost(post.id)
});

test('Should update a post', async function() {
  const { rows: post } = await savePost({ title: generate(), content: generate() })
  post[0].title = generate();
  post[0].content = generate();
  await request(`http://localhost:3000/posts/${post[0].id}`, 'put', { title: post[0].title, content: post[0].content })
  const { rows: updatedPost } = await getPost(post[0].id)
  expect(updatedPost[0].title).toBe(post[0].title)
  await deletePost(post[0].id)
  expect(updatedPost[0].content).toBe(post[0].content)
});

test('Should delete a post', async function() {
  const { rows: post } = await savePost({ title: generate(), content: generate() })
  await request(`http://localhost:3000/posts/${post[0].id}`, 'delete', { title: '', content: '' })
  const { rows: updatedPost } = await getPost(post[0].id)
  const posts = await getPosts();
  expect(updatedPost).toHaveLength(0)
});
