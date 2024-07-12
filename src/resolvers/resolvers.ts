import { addBook, getAllBooksBySequelize } from '../services/bookService';
import { getAllBorrowedBySequelize } from '../services/borrowService';
import { getCheckedOutBooks, getUserByName } from '../services/userService';

// TODO: implement functionality
const resolvers = {
    status: () => 200,

    //book operations
    getBooks: async () => {
        try {
            return await getAllBooksBySequelize();
        } catch (error) {
            throw new Error(`Failed to fetch books: ${error.message}`);
        }
    },
    addBook: async ({ title, author, ISBN, copies }) => {
        try {
            addBook(title, author, ISBN, copies);
        } catch (error) {
            throw new Error(`Failed to fetch borrows: ${error.message}`);
        }
    },

    //users operations
    getUserByName: async ({ username }) => {
        try {
            return await getUserByName(username);
        } catch (error) {
            throw new Error(`Failed to fetch borrows: ${error.message}`);
        }
    },

    getCheckedOutBooks: async ({ username }) => {
        try {
            return await getCheckedOutBooks(username);
        } catch (error) {
            throw new Error(`Failed to fetch borrows: ${error.message}`);
        }
    },

    //borrowed operations
    getBorrowed: async () => {
        try {
            return await getAllBorrowedBySequelize();
        } catch (error) {
            throw new Error(`Failed to fetch borrows: ${error.message}`);
        }
    },
};

export default resolvers;
