const fs = require('fs');

const readDir = (dir) => new Promise((resolve, reject) =>
  fs.readdir(process.env.PWD + dir, (err, files) => {
    if (err) return reject(err);

    return resolve(files);
  }),
);

module.exports = {
  readDir,
};
