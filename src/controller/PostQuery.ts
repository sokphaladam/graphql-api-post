import { pool } from "../config/connecting";

export const createPost = (args: any, req: any) => {
    const data = args.data;
    const qryToken = `select id from users where token = '${req.query.token}'`;

    return pool.query(qryToken)
    .then(res =>{
        const qry = `insert into posts(title,posts,posted,type)values('${data.title}', ${ 'Array [\'' + data.posts.join('\',\'') +'\']' }, ${res.rows[0].id}, ${data.type})`;

        return pool.query(qry)
        .then(res => true)
        .catch(err => false)
    })
    .catch(err => "permission denied")
}

export const listPost = (args: any, req: any) => {
    const qry = `select *from posts order by created desc`;

    return pool.query(qry)
    .then(res => res.rows)
    .catch(err => err)
}