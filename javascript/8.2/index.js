const myCountry = {
  country:'america',
  capital: 'new yourk',
  language: 'english',
  population:300,
  neighbours: [1,2,3,4,5],

  describe: function ()
  {
console.log( `${this.capital} has ${this.population} million people ,their mother tongue is ${this.language}
the have ${this.neighbours.length} countries and a capital called${this.capital}
`);
  },

  checkIsland: function()
  {
    this.island = this.neighbours.length===0 ? true : false;
  }
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);
