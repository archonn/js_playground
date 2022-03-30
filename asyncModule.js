/**
 * Echoes the same data after 3 seconds
 * @param {Any} data Input
 * @returns data
 */
const getDelayedData = async (data) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(data);
    }, 3000);
  });
};

module.exports = {
  getDelayedData,
};
