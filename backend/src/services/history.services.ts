import IHISTORY from "../interfaces/history.interface";
import * as historyRepository from "../repositories/history.repository";

export const createHistory = async (historyData: IHISTORY) => {
  try {
    const { userId, text, encrypted } = historyData;
    const newHistory: IHISTORY = {
      userId: userId,
      text: text,
      encrypted: encrypted,
    };

    const history = await historyRepository.create(newHistory);

    return history;
  } catch (err) {
    throw err;
  }
};

export const getAll = async (userId: string) => {
  const id = userId;
  try {
    const data = await historyRepository.findByUserId(id);
    return data;
  } catch (err) {
    throw err;
  }
};
