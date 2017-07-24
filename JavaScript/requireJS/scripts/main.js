requirejs.config({
    baseUrl: 'scripts',
    paths: {
        car: 'first/second/car',
        driver: 'driver',
    }
})

require(['car','driver'], function(car,driver) {
    console.log(driver.gas());
    var driver1 = new driver.person("karel",120);
    console.log(driver1);
    driver1.acc(150);
    console.log(driver1);
});