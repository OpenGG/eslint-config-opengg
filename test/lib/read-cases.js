const {
  readdir,
  readFile,
} = require('fs');

const {
  join,
} = require('path');

const {
  promisify,
} = require('util');

const readdirPromise = promisify(readdir);

const readFilePromise = promisify(readFile);

const readCases = async (dir) => {
  const files = await readdirPromise(dir);
  return files.map(
    (name) => {
      const path = join(dir, name);
      return {
        name,
        path,
        content: readFilePromise(
          path, {
            encoding: 'utf8',
          }
        ),
      };
    }
  );
};

module.exports = readCases;
