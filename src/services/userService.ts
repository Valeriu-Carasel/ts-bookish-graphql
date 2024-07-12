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

    console.log(borrowed);

    const books = [];
    for (const post of borrowed) {
        const book = await BooksSeq.findOne({
            where: { id: post.get('idBook') },
        });
        books.push(book);
    }
    for (const book in books) console.log(book);
    return books;

    //const checkedOut = // functie in borrowed dupa userID
    //afiseaza functie din books dupa id book
};
