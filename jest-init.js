require('dotenv').config({path: '.env.test'});

let hasRun = false; //watch mode
module.exports = async () => {
  if(!hasRun) {
    console.log('Setting up test db, etc');
    hasRun = true;
  }
};
