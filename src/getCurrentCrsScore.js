const path = require('path');
const { spawn } = require('child_process');
import scrapeCrsScore from './scrapeCrsScore/scrapeCrsScore';


/**
 * Run python script, pass in `-u` to not buffer console output
 * @return {ChildProcess}
 */
function runScript() {
  scrapeCrsScore();
  // return spawn('python', [
  //   '-u', path.join(__dirname, 'score.py'),
  // ]);
}

const subprocess = runScript();

// print output of script
export default async function getCurrentCrsScore() {


  const score = await scrapeCrsScore();

  console.log(score);

}
