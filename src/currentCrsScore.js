import scrapeCrsScore from './scrapeCrsScore/scrapeCrsScore';

const scrapeCrsScoreAsync = async () => {
  const scrapeCrsScoreResponse = await scrapeCrsScore();
  return scrapeCrsScoreResponse;
};

const currentScrapeCrsScore = () => {
  const crsScore = scrapeCrsScoreAsync();
  return crsScore;
};

module.exports = currentScrapeCrsScore;
