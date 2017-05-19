function getAverage (a,b) {
    
    var average = (a+b)/2;
    return average;

}

var myResult = getAverage(7,12);

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "shaun";


var myCar2 = {    
    maxSpeed:70,
    driver: "Karel",
    drive: function(speed, time) {
        console.log(speed*time);
    },
    test: function() {
        document.write(this);
    },
    test2: function() {
        console.log(this);
    },
    logDriver: function() {
        console.log("driver name is " + this.driver);
    },
}

var Car = function(maxSpeed, driver){

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.driver = function(speed, time) {
        console.log(speed*time);
    };
    this.logDriver = function() {
        console.log("driver name is " + this.driver);
    };
    
}


