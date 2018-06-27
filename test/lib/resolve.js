const {
  join,
} = require('path');

module.exports = base => (
  path => join(base, path)
);
