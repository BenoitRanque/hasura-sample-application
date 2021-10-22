import { Router } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

const router = Router();

// Construct a schema, using GraphQL schema language
const schema = buildSchema(/* GraphQL */ `
  type Query {
    cms: CMSInfo
  }

  type CMSInfo {
    version: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  cms: () => null,
};

router.use(
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
    // extensions: () => ({}),
  })
);

export default router;
