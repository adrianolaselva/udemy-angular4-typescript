import { Spacecraft, Containership} from './base-chips'

export class MilleniumFalcon extends Spacecraft implements Containership {

  cargoContainers: number

  constructor() {
    super('Hyperdrive')
    this.cargoContainers = 2
  }

  jumpIntoToHyperspace() {
    if(Math.random() >= 0.5){
      super.jumpIntoToHyperspace();
    }else {
      console.log('Failed to jump into hyperspace');
    }
  }
}
