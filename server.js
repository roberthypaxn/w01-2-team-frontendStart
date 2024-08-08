//The express web server is stored as a function/method inside the xpress variable
const xpress = require('express');

// The xpress() function is called... this returns an instance of an express application and is stored in the app variable
const app = xpress();

app.use('/', require("./routes"));

const port = 3000;
 
app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});