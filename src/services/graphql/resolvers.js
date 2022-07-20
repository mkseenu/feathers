export default function Resolvers() {
    let app = this;
    
    const Users = app.service('user');
  
    return {
      RootQuery: {
        allEmployee(root, args, context) {
          console.log(" calling ");

          return Users.find({});
        },
        employees(root, { name }, context) {
          return Users.find({
            query: {
              name
            }
          });
        },
        removeEmployee(root, { id }, context) {
          return Users.remove(id);
        }
      },
      RootMutation: {

        createEmployee(root, data, context) {
          const daa= Users.create(data, context);
          return daa;
        }
      }
    }
  }
  