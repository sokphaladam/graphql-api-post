import express from 'express';
import expressGraphql from 'express-graphql';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import { graphqlUploadExpress } from 'graphql-upload';
import graphqlPlayground from 'graphql-playground-middleware-express';
import resolverMap from './resolverMap';
import { buildSchema } from 'graphql';
import { importSchema } from 'graphql-import';

const app: express.Application = express();

app.use('*', cors());
app.use(compression());
app.use(
    '/graphql',
    graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
    expressGraphql({
        rootValue: resolverMap,
        schema: buildSchema(importSchema('./src/schema/schema.graphql')),
        graphiql: true
    })
)
app.use('/playground', graphqlPlayground({ endpoint: '/graphql' }));

const httpServer = createServer(app);

httpServer.listen(
    { port: 3000 },
    (): void => console.log(`\n🚀   GraphQL is now running on http://localhost:3000/graphql`)
)