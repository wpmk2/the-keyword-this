//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

     //The "this" keyword makes your code reusable.  It's value is determined by how it is called and "who" calls it.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Implicit binding- left of the dot at Call time.   (me.sayName();  'me' is bound implicitly, you.sayName();  'you' is bound this time)
      //Explicit binding- uses .call, .apply, or .bind to bind 'this' to an obj and pass arguments
      //new binding- When a function is invoked with the 'new' keyword, the 'this' inside that function receives the value of new Object being created by the function
      //window binding- the window obj is what 'this' will default to if there is no object for this to bind to- produces error is strict mode.

  // 3) What is the difference between call and apply?

      //.call = arguments must be explicitly and individually given
      //.apply = allows you to enter arguments as an array

  // 4) What does .bind do?

      //returns a new, identical function where 'this' is bound to the first argument, you can make it call itself immediately if you want


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

var user = {
	username: "wpmk2",
	email: "wilsonparrishmk2@gmail.com",
	getUsername: function () {
		return this.username;
	}
};

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

function Car(brand, model, year) {
	this.brand = brand;
	this.model = model;
	this.year = year;
	this.move = 0;
}

Car.prototype.moveCar = function() {
	this.move = this.move + 10;
	return this.move;
}

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments prius' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the write object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

getYear.call(prius);
getYear.apply(mustang);


//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

//setTimeout(getUsername, 5000);

setTimeout(getUsername.bind(user), 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

  //"14"

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //getUsername

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.

