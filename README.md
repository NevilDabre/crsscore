# Canada Permanent Resident Express Entry Live Score
- This module provides Comprehensive Ranking System (CRS) updates which is used for skilled immigrants (Express Entry). The CRS is a points-based system that we use to assess and score your profile and rank it in the Express Entry pool.
- This tool uses information from following page: [CRS Website](https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations.html)
- You can calculate your score here: [CIC Website](https://www.cic.gc.ca/english/immigrate/skilled/crs-tool.asp).

### Install
```shell
npm install @neville.dabreo/canada-crs-score
```

### Usage
```js
// Load module
import getCrsScore from "@neville.dabreo/canada-crs-score";
 
// Get the latest score and other information
const crsScore = async () => {
  const crsScoreResult = await getCrsScore();
  // Do your stuff with result. NOTE - returns result in a promise.
  console.log(crsScoreResult);
  return crsScoreResult;
};

// Call 
crsScore();
```


### Output
I have provided return result with two object properties as follows
  - Plain - Human readable Text
  - Json - JS friendly object for developers.

```js
//example
{ plain:
   { 'Number of invitations issued': '3,400',
     'Rank required to be invited to apply': '3,400',
     'Date and time of round': 'January 8, 2020 at 13:33:44 UTC',
     'CRS score of lowest-ranked candidate invited': '473',
     'Tie-breaking rule': 'December 27, 2019 at 13:35:09 UTC'
    },
  json:
   { number_of_invitations_issued: 3400,
     rank_required_to_be_invited_to_apply: 3400,
     date_and_time_of_round: 2020-01-08T13:33:44.000Z,
     'crs_score_of_lowest-ranked_candidate_invited': 473,
     'tie-breaking_rule': 2019-12-27T13:35:09.000Z 
    } 
}
```

## Questions
Share your thoughts or inform me bugs here: [Github Issues](https://github.com/NevilDabre/crsscore/issues)

## Contact
Email - [nevil_dabre@yahoo.com](nevil_dabre@yahoo.com)


Good Luck!

