import { getRepository } from 'typeorm';
import Transaction from '../models/Transaction';
import AppError from '../errors/AppError';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const repository = getRepository(Transaction);
    const transaction = await repository.findOne(id);

    if (!transaction) {
      throw new AppError('The Transaction does not exists');
    }

    await repository.remove(transaction);
  }
}

export default DeleteTransactionService;
