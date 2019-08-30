```
drop table if exists files;
drop table if exists posts;
drop table if exists comments;
drop table if exists likes;
drop table if exists users;

create table users(
    id serial primary key,
    first_name text not null,
    last_name text not null,
    gender text null,
    email text null,
    password text null,
    register int not null,
    token text not null,
    photo text not null,
    created timestamp default now(),
    updated timestamp default now()
);

create table posts(
    id serial primary key,
    title text,
    posts text[],
    created timestamp default now(),
    updated timestamp default now(),
    posted int not null,
    type int not null,
    love bigint default 0,
    comment bigint default 0,
    foreign key (posted) references users(id)
);

create table likes(
    id serial primary key,
    postto int not null,
    userid int not null,
    created timestamp default now(),
    updated timestamp default now(),
    foreign key (postto) references posts(id),
    foreign key (userid) references users(id)
);

create table comments(
    id serial primary key,
    userid int not null,
    commentto int not null,
    comment text not null,
    created timestamp default now(),
    updated timestamp default now(),
    foreign key (userid) references users(id),
    foreign key (commentto) references comments(id)
);

create table files(
    id serial primary key,
    filename text not null,
    created timestamp default now()
);
```