import crsScore from './getCurrentCrsScore'

const crsScoreResult = async () => {
  const res = await crsScore();
  return res;
};

module.exports = crsScoreResult;
