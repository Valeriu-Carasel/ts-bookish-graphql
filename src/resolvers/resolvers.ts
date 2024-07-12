import { getAllBooksBySequelize } from '../services/bookService';

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
};

export default resolvers;
