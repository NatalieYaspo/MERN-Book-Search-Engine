
// NEED TO UPDATE THIS TYPEDEFS
const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]!
  }

  type Book {
    bookId: String
    authors: [String]!
    description: String
    title: String
    image:
    link:
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    saveBook(????): User

    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;