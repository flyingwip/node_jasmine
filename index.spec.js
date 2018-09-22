


describe("index.spec.js", function() {
	
	const Index = require('./index');
	
	it("dogs should be an array", function() {
    
    var index = new Index();
  	console.log(index.dogs());
  	var dogs = [ { name: 'Caro', species: 'dog' },
  		{ name: 'Hamilton', species: 'dog' } ]; 	

    expect(index.dogs()).toEqual(dogs);


  });


});