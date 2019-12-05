const jwtDecode = require('jwt-decode');

exports.validateToken = (req, value, cols) => {
  const token = req.headers.authorization;
  const decoded = jwtDecode(token);

  if (decoded.gty === 'client-credentials') return true;

  return cols.some((col) => decoded[col] == value);
};
