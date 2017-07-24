define(function() {
   
    var person = function(name,speed) {
        this.name = name;
        this.speed = speed;
        this.acc = function(newSpeed) {
            this.speed = newSpeed;
        }
    }
    
    var gas = function() {
        console.log("gas");
    }
    
    return {
        gas: function() {
            console.log("gas");
        },
        person: person,
    }
    
});