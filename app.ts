import { Spacecraft, Containership} from './base-chips';
import { MilleniumFalcon} from './starfighters';

import * as _ from 'lodash';

console.log(_.pad("typescript Examples", 40, "="));

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoToHyperspace();

let falcon = new MilleniumFalcon();
falcon.jumpIntoToHyperspace()

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2
console.log(`Is falcon good for de job ? ${goodForTheJob (falcon) ? 'YES' : 'NO'}`)
