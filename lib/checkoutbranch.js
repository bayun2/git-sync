var execSync = require('child_process').execSync;

function checkoutbranch(branch) {
  try {
    execSync('git checkout ' + branch);
  } catch(e) {
    execSync('git checkout -b ' + branch);
    execSync('git push -u -f origin ' + branch);
  }
  execSync('git pull');
}

module.exports = checkoutbranch;
