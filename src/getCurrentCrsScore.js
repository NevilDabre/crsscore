const path = require('path');
const { spawn } = require('child_process');

/**
 * Run python script, pass in `-u` to not buffer console output
 * @return {ChildProcess}
 */
function runScript() {
  return spawn('python', [
    '-u', path.join(__dirname, 'score.py'),
  ]);
}

const subprocess = runScript();

// print output of script
export default function getCurrentCrsScore() {
  return new Promise((resolve, reject) => {
    subprocess.stdout.on('data', (data) => {
      if (data.indexOf('Testing') === -1 ) {
        resolve(JSON.parse(data.toString()));
      }
    });

    subprocess.stderr.on('data', (data) => {
      reject(data);
    });
  });
}
