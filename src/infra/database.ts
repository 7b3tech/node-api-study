import pgPromise from 'pg-promise';

const pgp = pgPromise({/* Initialization Options */ });

export const db = pgp({
  user: 'postgres',
  password: 'docker',
  host: 'localhost',
  port: 5432,
  database: 'blog'
});
