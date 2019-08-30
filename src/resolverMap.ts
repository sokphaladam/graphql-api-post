import { createUser, login, me } from './controller/UserQuery';
import { GraphQLUpload, UploadOptions } from 'graphql-upload';
import { generate } from './config/generate';
import { createWriteStream } from 'fs';
import { createPost, listPost } from './controller/PostQuery';

const resolverMap = {
    Upload: GraphQLUpload,
    me: me,
    createUser: createUser,
    login: login,
    createPost: createPost,
    postList: listPost,
    uploadSingleFile: async (root: any) => {
        const { filename, createReadStream } = await root.file;

        let newFilename = generate() + filename + '.png';

        createReadStream()
            .pipe(createWriteStream( __dirname + `/../images/${newFilename}` ))

        return newFilename;
    }
};

export default resolverMap;