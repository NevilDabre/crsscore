import crsScore from './currentCrsScore';

const crsScoreResult = async () => {
  const res = await crsScore();
  return res;
};

export default crsScoreResult;
