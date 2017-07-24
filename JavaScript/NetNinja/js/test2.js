function setUpEvents() {
    
    var content = document.getElementById("tester");

    console.log("test");
    
    console.log(getAverage(5,10));
    
    volgorde();
    
    function volgorde (){
        console.log("volgorde maakt niet uit");
    }

    content.onclick = function (){

        console.log("clicked");

        if(content.id == "tester") { 
            content.id = "tester2";
            console.log("clicked");
        }
        else {
            content.id = "tester";
            console.log("clicked");
        }
        /*
        changing to #tester.open:
        tester.className = "add-to-bag open"
        dus spatie i.p.v. een "."
        */
        

    };
    
    var myMessage = document.getElementById("plaatje")
    
    function showPlaatje() {
        myMessage.className = "show";
    }
    
    function switchPlaatje() {
        if(myMessage.className == "show") {
            myMessage.className = "";
        }
        else {
            myMessage.className = "show";
        }
    }
    
//    setTimeout(showPlaatje, 1000);
    var interval = setInterval(switchPlaatje, 1000);
    
    myMessage.onclick = function() {
        clearInterval(interval);
        myMessage.className = "show";
    }
}

window.onload = function(){
    
    setUpEvents();
    
};
