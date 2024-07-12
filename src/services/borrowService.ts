import { BorrowedSeq } from '../models/BorrowedSequelize';
import { UsersSeq } from '../models/UsersSequelize';
import { BooksSeq } from '../models/BooksSequelize';

export const getAllBorrowedBySequelize = async () => {
    return await BorrowedSeq.findAll();
};

interface BorrowedBook {
    book: any; //iarta-ne Raimond
    dueDate: any;
}
export const getBorrowedBooks = async (idUser) => {
    const queryResult = await BorrowedSeq.findAll({
        include: [
            {
                model: BooksSeq,
                required: true,
            },
        ],
        attributes: ['dueDate'],
        where: { idUser: idUser },
    });
    console.log(queryResult);
    const booooook: BorrowedBook[] = [];
    queryResult.forEach((x) => {
        console.log(x);
        booooook.push({
            book: x.get('Book'),
            dueDate: x.get('dueDate'),
        });
    });
    return booooook;
};
