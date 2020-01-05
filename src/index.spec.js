import assert from 'assert';
import { expect, should } from 'chai';
import CrsScore from './index';

async function getCrsScore() {
  return Promise.resolve(CrsScore());
}

describe('Test Crs Score', () => {

  it('Crs Score', async () => {
    const crs = await getCrsScore();
    expect(crs).to.have.own.property('score');
  });

  it('Crs Rank Required', async () => {
    const crs = await getCrsScore();
    expect(crs).to.have.own.property('score');
  });

  it('Crs Date and Time', async () => {
    const crs = await getCrsScore();
    expect(crs).to.have.own.property('score');
  });

  it('Number Of Invitations', async () => {
    const crs = await getCrsScore();
    expect(crs).to.have.own.property('number_of_invitations');
  });
});