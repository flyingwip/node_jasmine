  const Index = require('./index');


describe("index.spec.js", function() {

  var index;

  beforeEach(function() {
    
    index = new Index();
    //index.dogs();
    //foo.setBar(456, 'another param');
  });

  
	it("dogs should be an array", function() {
    
    var dogs = [ { name: 'Caro', species: 'dog' },
  		{ name: 'Hamilton', species: 'dog' } ]; 	

    expect(index.dogs()).toEqual(dogs);

  });

  it("tracks that the spy was called", function() {

    //console.log(index.dogs()  ) ;
    spyOn(index, 'dogs');
    //index.dogs();
    //expect(index.dogs).toHaveBeenCalled();

    var dogs = [ { name: 'Caro', species: 'dog' },
      { name: 'Hamilton', species: 'dog' } ];   

    expect(index.dogs()).toEqual(dogs);

  });




});