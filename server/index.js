require('newrelic');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { sendRenderedHTML } = require('./render');

const app = express();

const PORT = process.env.PORT || 8888;

// app.use(morgan('dev'));

// serve client files
app.use('/:roomId', express.static(path.join(__dirname, '/../public')));
// app.get('/:roomId', sendRenderedHTML);

app.listen(PORT, () => {
  console.log(`server running at: http://localhost:${PORT}`);
});
