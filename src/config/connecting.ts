import { Pool } from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: '134.209.111.226',
    database: 'medias',
    password: 'postgress123',
    port: 5432
});