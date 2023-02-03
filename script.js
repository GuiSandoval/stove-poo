class Oven {
  constructor(doorGlassDimensions) {
    this.doorGlassDimensions = doorGlassDimensions;
    this.hasLight = false;
  }

  toggleLight() {
    this.hasLight = !this.hasLight;
  }
}


class Stove {
  constructor(brand, color, dimensions) {
    this.brand = brand;
    this.color = color;
    this.dimensions = dimensions;
    this.burners = [];
    this.burnersCount = 4;
    this.igniters = [];
    this.ignitersCount = 5;
    this.hasOven = true;
    this.hasLight = false;

    this.addBurners();
    this.addIgniters();
    this.oven = new Oven([30, 30])
  }

  // this method is private
  addBurners() {
    for (let i = 0; i < this.burnersCount; i++) {
      this.burners.push({
        id: i,
        on: false,
      });
    }
  }

  // this method is private
  addIgniters() {
    const colors = ["red", "blue", "green", "yellow", "black"];
    for (let i = 0; i < this.ignitersCount; i++) {
      this.igniters.push({
        id: i,
        color: colors[i],
        on: false,
      });
    }
  }

  turnOnBurner(burnerId) {
    this.burners[burnerId].on = true;
  }

  turnOffBurner(burnerId) {
    this.burners[burnerId].on = false;
  }

  turnOnIgniter(igniterId) {
    this.igniters[igniterId].on = true;
  }

  turnOffIgniter(igniterId) {
    this.igniters[igniterId].on = false;
  }

  toggleLight() {
    this.hasLight = !this.hasLight;
  }
}

