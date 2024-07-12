import { BorrowedSeq } from '../models/BorrowedSequelize';

export const getAllBorrowedBySequelize = async () => {
    return await BorrowedSeq.findAll();
};
