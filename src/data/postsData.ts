import { database } from '../infra/database';

function getPosts() {
  return database.query('select * from blog.post');
}

export { getPosts as postsData }
