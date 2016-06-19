import { STATES, AIRPORTS } from './metadata';

export function priceFromState(state) {
  switch (state) {
    case STATES.AL:
      return 100;
    case STATES.AK:
      return 100;
    case STATES.AZ:
      return 100;
    case STATES.AR:
      return 100;
    case STATES.CA:
      return 100;
    case STATES.CO:
      return 100;
    case STATES.CT:
      return 100;
    case STATES.DE:
      return 100;
    case STATES.FL:
      return 100;
    case STATES.GA:
      return 100;
    case STATES.HI:
      return 100;
    case STATES.ID:
      return 100;
    case STATES.IL:
      return 100;
    case STATES.IN:
      return 100;
    case STATES.IA:
      return 100;
    case STATES.KS:
      return 100;
    case STATES.KY:
      return 100;
    case STATES.LA:
      return 100;
    case STATES.ME:
      return 100;
    case STATES.MD:
      return 100;
    case STATES.MA:
      return 100;
    case STATES.MI:
      return 100;
    case STATES.MN:
      return 100;
    case STATES.MS:
      return 100;
    case STATES.MO:
      return 100;
    case STATES.MT:
      return 100;
    case STATES.NE:
      return 100;
    case STATES.NV:
      return 100;
    case STATES.NH:
      return 100;
    case STATES.NJ:
      return 100;
    case STATES.NM:
      return 100;
    case STATES.NY:
      return 100;
    case STATES.NC:
      return 100;
    case STATES.ND:
      return 100;
    case STATES.OH:
      return 100;
    case STATES.OK:
      return 100;
    case STATES.OR:
      return 100;
    case STATES.PA:
      return 100;
    case STATES.RI:
      return 100;
    case STATES.SC:
      return 100;
    case STATES.SD:
      return 100;
    case STATES.TN:
      return 100;
    case STATES.TX:
      return 100;
    case STATES.UT:
      return 100;
    case STATES.VT:
      return 100;
    case STATES.VA:
      return 100;
    case STATES.WA:
      return 100;
    case STATES.WV:
      return 100;
    case STATES.WI:
      return 100;
    case STATES.WY:
      return 100;
    case STATES.DC:
      return 100;
    default:
      return 0;
  }
}

export function priceFromAirport(airport) {
  switch (airport) {
    case AIRPORTS.ATL:
      return 395;
    case AIRPORTS.AUS:
      return 290;
    case AIRPORTS.CLE:
      return 350;
    case AIRPORTS.JFK:
      return 320;
    case AIRPORTS.LAX:
      return 150;
    case AIRPORTS.ORD:
      return 270;
    case AIRPORTS.PDX:
      return 180;
    case AIRPORTS.SAN:
      return 250;
    case AIRPORTS.SFO:
      return 200;
    default:
      return 200;
  }
}
