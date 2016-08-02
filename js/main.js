/********* INDEX **********/

//hide h1
jQuery("h1").hide();

//show h1 slowly
jQuery("h1").show("slow");

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
$overlay.append($image);
$("body").append($overlay);
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  $image.attr("src", imageLocation);
  $overlay.show();
});

$overlay.click(function(){

$overlay.hide();

})
