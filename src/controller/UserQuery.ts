import { pool } from "../config/connecting";
import { generate } from "../config/generate";
import { getImage } from "../config/randomImage";

export const createUser = (args: any) => {
    const data = args.data;
    const qry = `
        insert into users(first_name, last_name, gender, email, password, register, token, photo)
        values('${data.first_name}','${data.last_name}', '${data.gender}','${data.email}', '${data.password}', 0, '${generate() + data.first_name + data.last_name }', '${getImage()}')`;

    return pool.query(qry)
    .then(res => true)
    .catch(err => false)
}

export const login = (args:any) => {
    const data = args.data;
    const qry = `select token from users where email = '${data.email}' and password = '${data.password}'`

    return pool.query(qry)
    .then(res => res.rows[0].token)
    .catch(err => err)
}

export const me = (args: any, req: any) => {
    const qry = `select *from users where token = '${req.query.token}'`
    return pool.query(qry)
    .then(res => res.rows[0])
    .catch(err => err)
}