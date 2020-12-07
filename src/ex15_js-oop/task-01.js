function Candy(name) {
  this.name = name;
}

Candy.prototype.setCandyWeint = function (weight) {
  this.weight = weight;
}

function Gift() {
  this.candies = [];

  this.fillGift = function (...arg) {
      for (let i = 0; i < arg.length; ++i) {
          this.candies.push(arg[i]);
          arg[i].setCandyWeint(this.candyNums[arg[i].name]);
      }

      this.candies.sort((lhv, rhv) => {
          if (lhv.weight < rhv.weight) {
              return -1;
          }

          if (lhv.weight > rhv.weight) {
              return 1;
          }

          return 0;
      })
  }

  this.candyNums = { Alenka: 2, Coockie: 5, Karakum: 4 };

  this.returnGiftWeigth = function () {
      let result = 0;

      for (let i = 0; i < this.candies.length; ++i) {
          result += this.candies[i].weight;
      }
      return result;
  };

  this.findCandy = function (name) {

      for (let i = 0; i < this.candies.length; ++i) {
          if (this.candies[i].name === name) {
              console.log("I find this candy!");
              return;
          }
      }

      console.log("Sorry, can't find this candy");
  }
}

let xMasGift = new Gift();
xMasGift.fillGift(new Candy('Karakum'), new Candy('Alenka'), new Candy('Coockie'));

  let giftWeight = xMasGift.returnGiftWeigth();
  xMasGift.findCandy("Alenka");
  xMasGift.findCandy("Cosmos");
