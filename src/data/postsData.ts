import { db as database } from '../infra/database';

export interface Post {
  title: string;
  content: string;
}

function getPosts() {
  return database.query('select * from blog.post');
}

function getPost(id: string) {
  return database.oneOrNone('select * from blog.post where id=$1', [id])
}

function savePost(post: Post) {
  return database.one('insert into blog.post(title, content) values($1,$2) returning * ', [post.title, post.content]);
}

function updatePost(id: string, post: Post) {
  return database.none('update blog.post set title = $1, content =$2 where id =$3', [post.title, post.content, id])
}

function deletePost(id: string) {
  return database.none('delete from blog.post where id= $1', [id]);
}


export { getPosts as postsData }
export { getPost as postData }
export { savePost as saveData }
export { deletePost as deleteData }
export { updatePost as updateData }



// router.get('/:name', async (req, res) => {
//   const { name } = req.params;
//   const { rows } = await pool.query('select * from city where name = $1', [name]);
//   res.send(rows[0]);
// })

