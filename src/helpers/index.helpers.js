const random = (length = 8) => Math.random().toString(16).substr(2, length);

module.exports = {
  random,
};
