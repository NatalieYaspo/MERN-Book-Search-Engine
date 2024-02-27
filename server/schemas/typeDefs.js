
// NEED TO UPDATE THIS TYPEDEFS
const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String
    authors: [String]!
    description: String
    title: String
    link: String
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    user(username: String!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    saveBook(
      bookId: Int
      authors: [String]
      description: String
      title: String
      link: String
      image: String): User

    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;