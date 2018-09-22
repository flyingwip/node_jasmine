//
function Index() {
}

Index.prototype.animals =  [
		{name:"Fluffy", species:"rabbit"},
		{name:"Caro", species:"dog"},
		{name:"Hamilton", species:"dog"},
		{name:"Harold", species:"fish"},
		{name:"Ursula", species:"cat"},
		{name:"Jimmy", species:"fish"},
	];
  
Index.prototype.isDog = (a) => a.species === 'dog';

Index.prototype.dogs = function() {
  	
	return this.animals.filter(this.isDog);
	//console.log(this.animals);
	//return this.animals.filter(Index.prototype.isDog) ;
};

module.exports = Index;
//console.log(animals.animals.filter(animals.isDog));




// mymodule.js
// exports.do = function() {
 
 
// 	var animals = [
// 		{name:"Fluffy", species:"rabbit"},
// 		{name:"Caro", species:"dog"},
// 		{name:"Hamilton", species:"dog"},
// 		{name:"Harold", species:"fish"},
// 		{name:"Ursula", species:"cat"},
// 		{name:"Jimmy", species:"fish"},
// 	];

// 	var isDog = (a) => a.species === 'dog';

// 	var dogs = animals.filter(isDog);

// 	//console.log(dogs);
 
//   	return this;
// }


//exports.do();





// var isDog = (a) => a.species === 'dog'

// var dogs = animals.filter(isDog);

// console.log(dogs);