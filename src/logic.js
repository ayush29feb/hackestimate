import _ from 'lodash';
import { scaleFeature, minMaxArray, duplicate } from './util';
// For a 1000 Applications
const TARGET = {
  rank: 1,
  price: 100,
};
const LOCAL_HACKER_RATIO = 0.7;

function optimize(normalizeApps, normalizeTarget) {
  const costValueApps = [];
  _.forEach(normalizeApps, (p) => {
    const single = duplicate(p);
    const x1 = normalizeTarget.nRank;
    const y1 = normalizeTarget.nPrice;
    const x2 = p.nRank;
    const y2 = p.nPrice;
    single.distance = Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2);
    costValueApps.push(single);
  });
  return _.sortBy(costValueApps, 'distance');
}

// localApplications is a subset of totalApplications who are in the regional area
function localHackers(localApplications, localHackersTotal) {
  // Sort by rank and return the new object totalLocalHackers
  localApplications.sort((a, b) => (a.rank > b.rank ? -1 : 1));
  const finalLocalHackers = localApplications.slice(0,
    _.min([localHackersTotal, localApplications.length]) - 1);
  return finalLocalHackers;
}

function remoteHackers(remoteApplications, budget, totalHackers) {
  // Sanity Check
  if (remoteApplications.length < 1) {
    return remoteApplications;
  }
  // Step 1. normalize this distribution
  // copy the applications with a scaled features
  const rankMinMax = minMaxArray(remoteApplications, 'rank');
  const priceMinMax = minMaxArray(remoteApplications, 'price');
  const normalizeApps = remoteApplications.map((a) => {
    const ret = duplicate(a);
    ret.nRank = scaleFeature(a.rank, rankMinMax.min, rankMinMax.max);
    ret.nPrice = scaleFeature(a.price, priceMinMax.min, priceMinMax.max);
    return ret;
  });
  const normalizeTarget = {
    nRank: scaleFeature(TARGET.rank, rankMinMax.min, rankMinMax.max),
    nPrice: scaleFeature(TARGET.price, priceMinMax.min, priceMinMax.max),
  };

  // Step 2. Optimize on constraints
  const distanceApps = optimize(normalizeApps, normalizeTarget);
  let money = 0;
  let counter = 0;
  while (money < budget && counter < distanceApps.length && counter < totalHackers) {
    money += distanceApps[counter].price;
    counter++;
  }
  const finalRemoteHackers = distanceApps.slice(0, counter);
  // return the list of accepted hackers
  return finalRemoteHackers;
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
  return _.union(remoteAcceptedHackers);
}
