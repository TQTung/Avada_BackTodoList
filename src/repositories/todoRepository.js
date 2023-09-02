import autoIncreasingId from "../helpers/autoIncreasing.js";
import { getDataFromDb, saveDataIntoDb } from "../helpers/getAndSaveData.js";

const allDatas = await getDataFromDb();

const getAllData = async () => {
  return allDatas;
};

const addNewTodo = async (newTodo) => {
  const increasingId = autoIncreasingId(allDatas.map((data) => data.id));
  const newListsData = [...allDatas, { ...newTodo, id: increasingId }];

  await saveDataIntoDb(newListsData);

  return newListsData;
};

const updateStatusComplete = async (id) => {
  const newListWhenUpdated = allDatas.map((data) => {
    if (data.id === id) {
      return { ...data, isCompleted: true };
    }
    return data;
  });
  await saveDataIntoDb(newListWhenUpdated);

  return newListWhenUpdated;
};

const undoStatusComplete = async (id) => {
  const newListWhenUpdated = allDatas.map((data) => {
    if (data.id === id) {
      return { ...data, isCompleted: false };
    }
    return data;
  });
  await saveDataIntoDb(newListWhenUpdated);

  return newListWhenUpdated;
};

const removeTodo = async (id) => {
  const newListThenDelete = allDatas.filter((todo) => todo.id !== id);

  await saveDataIntoDb(newListThenDelete);
  return newListThenDelete;
};

export default {
  getAllData,
  addNewTodo,
  updateStatusComplete,
  undoStatusComplete,
  removeTodo,
};
