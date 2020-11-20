var date;
date=Date();
console.log(date);
try {
    throw 'myException'; // generates an exception
  } catch (e) {
    // statements to handle any exceptions
    logMyErrors(e); // pass exception object to error handler
  }