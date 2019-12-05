const mapObject = (keys, ctx) => {
  const result = {};

  for (const key of Object.keys(keys)) {
    result[key] = eval(keys[key]);
  }

  return result;
};

module.exports = mapObject;
