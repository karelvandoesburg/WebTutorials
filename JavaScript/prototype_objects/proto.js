var Bear = function(name) {
    this.name = name;
}

Bear.prototype.getName = function() {
    return this.name;
}

var grizzly = new Bear('grizzle');
console.log(grizzly.getName());

var Polar = function(name) {
    Bear.call(this, name);
    console.log('polar bear created')
}

Polar.prototype = Object.create(Bear.prototype);
Polar.prototype.giveBirth = function(name) {
    console.log('new polar is created');
    var baby = new Polar(name);
    baby.parent = this.name;
    return baby;
}

var white = new Polar('white');
console.log(white.getName());
console.log(white.name);

var baby = white.giveBirth('baby');
console.log()
console.log(baby.parent + ' is the parent of this bear');