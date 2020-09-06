require('dotenv').config();
require('./lib/utils/connect')();
const app = require('./lib/app');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
});
