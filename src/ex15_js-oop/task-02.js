class Device {
  constructor(name, power, isTurnOn) {
      this.name = name;
      this.power = power;
      this.isTurnOn = isTurnOn;
  }

  switchPower() {
      this.isTurnOn = !this.isTurnOn;

      if (this.isTurnOn) {
          console.log(`${this.name} is on`);
      } else {
         console.log(`${this.name} is off`);
      }
  }
}

class Fridge extends Device {
  constructor(name, power, isTurnOn) {
      super(name, power, isTurnOn);
      this.food = false;
  }

  checkFood() {
      return this.food;
  }

  putFood() {
      if (this.food) {
          console.log("No more food needed");
      } else {
          this.food = true;
          console.log("U puts some food in to fridge");
      }
  }

  takeFood() {
      this.food = false;
      console.log("U take some food in to fridge");
  }
}

class TV extends Device {
  constructor(name, power, isTurnOn) {
      super(name, power, isTurnOn);
      this.volume = 0;
  }

  upVolume() {
      this.volume += 10;

      if (this.volume > 100) {
          this.volume = 100;
          console.log("Can't to louder");
      }
  }

  downVolume() {
      this.volume -= 10;

      if (this.volume < 0) {
          console.log("Can't do quiter");
          this.volume = 0;
      }
  }
}

class Room {
  constructor(...device) {
      this.device = [...device];
  }

  countPower() {
      let resultPower = 0;

      for (let i = 0; i < device.length; ++i) {
          resultPower += device[i].power;
      }

      return resultPower;
  }

  findDevice(name) {
      for (let i = 0; i < this.device.length; ++i) {
          if (this.device[i].name === name) {
              console.log(`I find ${device[i].name} in the room!`);
              return this.device[i];
          }
      }

      console.log("Sorry, can't find this device");

      return undefined;
  }
}

let room = new Room(new TV("televisor", 3, false), new Fridge("holodilnick", 1, true));

room.findDevice('holodilnick').putFood();
room.findDevice('holodilnick').putFood();
room.findDevice('holodilnick').takeFood();

room.findDevice('televisor').downVolume();

for (let i = 0; i < 11; ++i) {
  room.findDevice('televisor').upVolume();
}
