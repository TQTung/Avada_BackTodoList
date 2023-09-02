const autoIncreasingId = (array) => {
  let randomId;
  do {
    randomId = Math.floor(Math.random() * 101) + 1; // random id 1-100
  } while (array.includes(randomId));

  return randomId;
};

export default autoIncreasingId;
