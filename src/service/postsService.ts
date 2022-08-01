import { postsData, postData, saveData, deleteData, updateData, Post } from '../data/postsData';

export function getPosts() {
  return postsData();
}

export function savePost(post: Post) {
  return saveData(post);
}

export function deletePost(id: string) {
  return deleteData(id);
}

export function updatePost(id: string, post: Post) {
  return updateData(id, post);
}
export function getPost(id: string) {

  return postData(id)
}

export { Post };
