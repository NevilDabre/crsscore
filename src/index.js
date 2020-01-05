import getCurrentCrsScore from './getCurrentCrsScore';

const score = async () => {
  try {
    const scoredata = await getCurrentCrsScore();
    return scoredata;
  } catch (err) {
    throw new Error('Something went wrong.');
  }
};

export default score;
