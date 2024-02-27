import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


// NEED TO ADD CORRECT PARAMETERS TO SAVE BOOK
export const SAVE_BOOK = gql`
  mutation saveBook($bookTitle: String!) {
    saveBook(bookTitle: $bookTitle) {
      _id
      bookTitle
      bookAuthor
    }
  }
`;

// NEED TO ADD CORRECT PARAMETERS TO SAVE BOOK
export const REMOVE_BOOK = gql`
  mutation removeBook($bookTitle: String!) {
    removeBook(bookTitle: $bookTitle) {
      _id
      bookTitle
      bookAuthor
    }
  }
`;