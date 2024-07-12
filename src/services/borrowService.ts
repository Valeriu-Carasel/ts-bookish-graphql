import { BorrowedSeq } from '../models/BorrowedSequelize';
import { UsersSeq } from '../models/UsersSequelize';
import { BooksSeq } from '../models/BooksSequelize';

export const getAllBorrowedBySequelize = async () => {
    return await BorrowedSeq.findAll();
};

export const getBorrowedBooks = async (idUser) => {
    return await BorrowedSeq.findAll({
        where: { idUser: idUser },
    });
};
