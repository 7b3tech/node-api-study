import { database } from '../infra/database';

function getPosts() {
  return database.query('select * from blog.post');
}

function savePosts(post: { title: string, content: string }) {
  return database.query('insert into blog.post(title, content) values($1,$2) returning * ', [post.title, post.content]);
}

function updatePost(id: string, post: { title: string, content: string }) {
  return database.query('update blog.post set title = $1, content =$2 where id =$3', [post.title, post.content, id])
}

function getPost(id: string) {
  return database.query('select * from blog.post where id=$1', [id])
}
function deletePost(id: string) {
  return database.query('delete from blog.post where id= $1', [id]);
}
export { getPosts as postsData }
export { getPost as postData }
export { savePosts as saveData }
export { deletePost as deleteData }
export { updatePost as updateData }



// router.get('/:name', async (req, res) => {
//   const { name } = req.params;
//   const { rows } = await pool.query('select * from city where name = $1', [name]);
//   res.send(rows[0]);
// })

