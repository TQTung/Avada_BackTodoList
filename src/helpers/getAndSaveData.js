import fs from "fs";

const getDataFromDb = async () => {
  const data = fs.readFileSync("./src/database/database.json", "utf-8");
  return JSON.parse(data).data;
};

const saveDataIntoDb = async (data) => {
  return fs.writeFileSync(
    "./src/database/database.json",
    JSON.stringify({
      data: data,
    })
  );
};

export { getDataFromDb, saveDataIntoDb };
