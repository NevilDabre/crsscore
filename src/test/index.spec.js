import { expect } from 'chai';
import CrsScore from '../index';

async function getCrsScore() {
  const res = await CrsScore();
  return res;
}

describe('Test Crs Score Function', async () => {
  let crs;
  beforeEach(async () => {
    crs = await getCrsScore();
  });

  it('Crs Score is an object', async () => {
    expect(crs).to.be.an('object')
  });

  it('Crs Score has formatted property', async () => {
    expect(crs).to.have.own.property('formatted');
  });

  it('Crs Score has plain property', async () => {
    expect(crs).to.have.own.property('plain');
  });

  it('Crs Score -> formatted has property number_of_invitations_issued', async () => {
    expect(crs).to.have.nested.property('formatted.number_of_invitations_issued');
  });

  it('Crs Score -> formatted has property rank_required_to_be_invited_to_apply', async () => {
    expect(crs).to.have.nested.property('formatted.rank_required_to_be_invited_to_apply');
  });

  it('Crs Score -> formatted has property date_and_time_of_round', async () => {
    expect(crs).to.have.nested.property('formatted.date_and_time_of_round');
  });

  it('Crs Score -> formatted has property crs_score_of_lowest-ranked_candidate_invited', async () => {
    expect(crs).to.have.nested.property('formatted.crs_score_of_lowest-ranked_candidate_invited');
  });

  it('Crs Score -> formatted has property tie-breaking_rule', async () => {
    expect(crs).to.have.nested.property('formatted.tie-breaking_rule');
  });

});
