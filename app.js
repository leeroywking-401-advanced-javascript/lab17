'use strict';

const fs = require('fs');

const /**
 *
 *
 * @param {*} err
 * @param {*} data
 */
alterFile = (file, payload) => {
  fs.readFile( file, (err, data) => {
    if(err) { throw err; }
    let stringed = JSON.stringify(payload)
    let text = `${data} \n ${stringed}`
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { throw err; }
      console.log(`${file} saved`);
    });
  });
};

// let file = process.argv.slice(2).shift();
// alterFile(file);

module.exports = alterFile;