import { BorrowedSeq } from '../models/BorrowedSequelize';
import { UsersSeq } from '../models/UsersSequelize';
import { BooksSeq } from '../models/BooksSequelize';

export const getAllBorrowedBySequelize = async () => {
    return await BorrowedSeq.findAll();
};

export const getBorrowedBooks = async (idUser) => {
    const books = await BorrowedSeq.findAll({
        include: [
            {
                model: BooksSeq,
                required: true,
            },
        ],
        where: { idUser: idUser },
    });
    const booooook = [];
    books.forEach((x) => {
        booooook.push(x.get('Book'));
    });
    // console.log(booooook);
    return booooook;
};
