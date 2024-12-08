const xpress = require('express');
const bodyParser = require('body-parser');

const professionalRoutes = require('./routes/professional');

const app = xpress();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/professional', professionalRoutes);

const port = 8080;

app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});