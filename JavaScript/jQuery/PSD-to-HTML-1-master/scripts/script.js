/*

$("h3").css({border: "3px solid blue"});

$('header nav li:first').css({border: '2px solid red'});


$('#contact:last-child').css({border: '2px solid red'});

$('#contact ul:last-child').css({border: '2px solid red'});
$('#contact li:nth-child(1)').css({border: '2px solid red'});

vanaf nu ben ik alles een beetje mee gaan typen, check nog de videos

.append()
.prepend()
.before()
.after()
.html()
.text()

.wrap()
.unwrap()
.wrapAll()

.epmty() empties inner HTML
.remove() removes whole element

.removeAttr() gemoces an attribute completely
.attr() can read or set any attribute
$(#contact img").attr("alt", "location"); verandert de alt attribute naar alt="location".


$(#contact img").css("top", "200px").css("left", "100px");
$(#contact img").css({
    "top" : "400px",
    "left" : "150px",
    etc.
})
changes css, op de tu geleerd dat het beter is om css in de css file te houde, dus veranderen van class of id etc.


.removeClass()
.addClass()
.toggleClass()

//$(header .wrapper").removeClass("wrapper");

.on() - binds an event to matched element(s)
.off() - unbinds event from matched element(s)

var clicker = $('#points-of-sale li');
console.log(clicker[0]);

clicker.on("click", function(){
    
    $(this).css({width : '400px'});
    
    clicker.off("click"); //als er op eentje geclickt is werkt het bij de rest niet meer
    
});

element.click(function(){
    alert("you clicked me");
})

element.dblclick(function(){
    alert("you clicked me");
    element.off("dblclick");
})

$(document).ready(function(){
    here the JS that loads when DOM is loaded.
})

same as

$(function(){
    here the JS that loads when DOM is loaded.
})

$(window).load(function(){
    here it waits for everything to load, not just HTML, but also pictures etc. Handy if you want to know height or width etc from image, you will only know this when the image is loaded.
})

$(element).click(function(e) {
    $("*").click(function() { //$("*") selects all elements
        console.log(e.target); //element that you fired the event on
        console.log(e.type);
        console.log("X-coordinate is" + e.pageX);
        console.log("Y-coordinate is" + e.pageY);
        e.stopPropagation(); //stops logging parent events
    })
})


*/


                