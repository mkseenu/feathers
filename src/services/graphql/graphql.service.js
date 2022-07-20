// Initializes the `graphql` service on path `/graphql`
const { Graphql } = require('./graphql.class');
const hooks = require('./graphql.hooks');
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import Resolvers from './resolvers';
import Schema from './schema';

module.exports = function (app) {
  // const options = {
  //   paginate: app.get('paginate')
  // };

  const executableSchema = makeExecutableSchema({
    typeDefs: Schema,
    resolvers: Resolvers.call(app)
  });

  app.use('/graphql', graphqlExpress((req) => {
    const { token, provider } = req.feathers;
    console.log(" calling ",req.feathers);

    return {
      schema: executableSchema,
      context: {
        token,
        provider
      }
    }
  }))

  app.use('/graphqlurl', graphiqlExpress({
    endpointURL: '/graphql'
  }));

  // Initialize our service with any options it requires
  // app.use('/graphql', new Graphql(options, app));

  // Get our initialized service so that we can register hooks
  // const service = app.service('graphql');

  // service.hooks(hooks);
};
