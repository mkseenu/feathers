const typeDefinitions = `
type Emp {
  id:Int
  name: String
  email: String
  mobile: String
  password: String
}

type RootQuery {
  allEmployee: [Emp]
  employees(name: String!): [Emp]
  removeEmployee(id:Int) : Boolean
}

type RootMutation {
  createEmployee (
    name: String!
    email: String!
    mobile: String
    password: String!
  ): Emp
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`;

export default typeDefinitions;
