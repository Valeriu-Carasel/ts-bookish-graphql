import { UsersSeq } from '../models/UsersSequelize';
import { getBorrowedBooks } from './borrowService';
import { BooksSeq } from '../models/BooksSequelize';

export const getUserByName = async (username: string) => {
    return await UsersSeq.findOne({ where: { username: username } });
};

export const getCheckedOutBooks = async (username) => {
    const user = await getUserByName(username);
    const userId = user.get('id');

    const borrowed = await getBorrowedBooks(userId);
    return borrowed;
};
