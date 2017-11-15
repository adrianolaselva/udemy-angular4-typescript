class Spacecraft {

    constructor (public propulsor: string) {}

    jumpIntoToHyperspace() {
      console.log(`Entering to hyperpace with ${this.propulsor}`);
    }

}

interface Containership {
  cargoContainers: number
}


export { Spacecraft, Containership }
