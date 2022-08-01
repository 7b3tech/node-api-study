import { postsData, postData, saveData, deleteData, updateData } from '../data/postsData';

export function getPosts() {
  return postsData();
}

export function savePost(post: { title: string, content: string }) {
  return saveData(post);
}

export function deletePost(id: string) {
  return deleteData(id);
}

export function updatePost(id: string, post: { title: string, content: string }) {
  return updateData(id, post);
}

export function getPost(id: string) {
  return postData(id)
}
