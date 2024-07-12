import { addBook, getAllBooksBySequelize } from '../services/bookService';
import { getAllBorrowedBySequelize } from '../services/borrowService';

// TODO: implement functionality
const resolvers = {
    status: () => 200,
    getBooks: async () => {
        try {
            return await getAllBooksBySequelize();
        } catch (error) {
            throw new Error(`Failed to fetch books: ${error.message}`);
        }
    },
    getBorrowed: async () => {
        try {
            return await getAllBorrowedBySequelize();
        } catch (error) {
            throw new Error(`Failed to fetch borrows: ${error.message}`);
        }
    },
    addBook: async () => {
        try {
            addBook('Jujutsu Kaisen 0', 'Gege Akutami', '9781974720149', 20);
        } catch (error) {
            throw new Error(`Failed to fetch borrows: ${error.message}`);
        }
    },
};

export default resolvers;
