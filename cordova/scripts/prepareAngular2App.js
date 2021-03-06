/**
 * Created by ith on 7/11/2017.
 */

const fs = require('fs');
const execSync = require('child_process').execSync;

module.exports = function(context) {
  console.log('Building Angular 2 application into "./www" directory.');
  const basePath = context.opts.projectRoot;
  const baseWWW = basePath + '/www';

  console.log('Base WWW:' + baseWWW);

  console.log(execSync(
    "ng build --output-path cordova/www/ --base-href .",
    {
      maxBuffer: 1024*1024,
      cwd: basePath + '/..'
    }).toString('utf8')
  );
};
