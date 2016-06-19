import _ from 'lodash';

const LOCAL_HACKER_RATIO = 0.7;
console.log('hi');
// localApplications is a subset of totalApplications who are in the regional area
function localHackers(localApplications, localHackersTotal) {
  // Sort by rank and return the new object totalLocalHackers
  localApplications.sort((a, b) => (a.rank > b.rank ? -1 : 1));
  const finalLocalHackers = localApplications.slice(0, localHackersTotal - 1);
  return finalLocalHackers;
}

function remoteHackers(remoteApplications, budget, totalHackers) {
  // normalize this distribution
  // google a normalization function
  // optimize on constraints
  // return the list of accepted hackers
  console.log(budget, totalHackers);
  return [];
}

// Pre: Takes in a array of objects containing all the applications,
//      Also takes in the price participanst constraints.
// Post: Returns the final array of objects of all the accepted applicaitons
export function finalhackers(totalApplications, budget, totalHackers) {
  // Step 1. Get the Local Hackers
  const localApplications = totalApplications.filter(a => (a.airport === 'SEA'));
  const localAcceptedApplications = localHackers(localApplications,
                                      _.floor(LOCAL_HACKER_RATIO * totalHackers));
  // Step 2. Get the Out of State Hackers
  const remoteApplications = totalApplications.filter(a => (a.airport !== 'SEA'));
  const remoteAcceptedHackers = remoteHackers(remoteApplications, budget,
                                  _.floor((1 - LOCAL_HACKER_RATIO) * totalHackers));
  // Step 3. Return the final hackers
  return _.union(localAcceptedApplications, remoteAcceptedHackers);
}
