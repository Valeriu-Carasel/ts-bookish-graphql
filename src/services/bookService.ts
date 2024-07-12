import { Books } from '../models/Books';
import { serverAttempt } from '../ConfigServer';
import { Connection, Request } from 'tedious';
import rowParser from 'tedious/lib/token/row-token-parser';
import { rejects } from 'node:assert';
import { connection } from '../app';
import { BooksSeq } from '../models/BooksSequelize';

export const getAllBooksByTedious = async (): Promise<Books[]> => {
    console.log(connection.state);

    const copyBooks = [];
    const request = new Request('SELECT * FROM Books', (err, rowCount) => {
        if (err) {
            throw err;
        }
        connection.close();
    });

    return new Promise((resolve, reject) => {
        request.on('row', (columns) => {
            const bookDatabase: Books = {
                id: columns[0].value,
                title: columns[1].value,
                author: columns[2].value,
                ISBN: columns[3].value,
                copies: columns[4].value,
            };
            copyBooks.push(bookDatabase);
        });
        request.on('doneProc', () => {
            resolve(copyBooks);
        });

        connection.execSql(request);
    });
};

export const getAllBooksBySequelize = async () => {
    const allBooks = await BooksSeq.findAll();
    return allBooks;
};

export const addBook = async (
    title: string,
    author: string,
    ISBN: string,
    copies: number,
) => {
    const book = await BooksSeq.create({
        title: title,
        author: author,
        ISBN: ISBN,
        copies: copies,
    });
    return book;
};
