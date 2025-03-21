import IHISTORY from "../interfaces/history.interface";
import historyModel from "../model/historyModel";

export const create = async (historyData: IHISTORY) => {
  const history = await historyModel.create(historyData);
  return history.save();
};

export const findByUserId = async (userId: string) => {
  const id = userId;
  const history = await historyModel.find({ userId: id });
  return history;
};
