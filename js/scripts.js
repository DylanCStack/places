// business logic
function Place(name, location, landmarks, dates, description) {
  this.name = name;
  this.landmarks = landmarks;
  this.location = location;
  this.dates = dates;
  this.description = description;
}

Place.prototype.createEntry = function() {
  return "<li><ul><li>Place: " + this.name +"</li><li>Location: " + this.location + "</li> <li>Landmarks: " + this.landmarks + "</li><li>Ideal dates: " + this.dates + "</li><li>Description: " + this.description + "</li></ul></li>"
}

//user interface logic
$(document).ready(function() {
  $("form#places").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#name").val();
    var inputtedLocation = $("input#location").val();
    var inputtedLandmarks = $("input#landmarks").val().split(",");
    var inputtedDates = $("input#dates").val();
    var inputtedDescription = $("textarea#description").val();

    var newPlace = new Place(inputtedName, inputtedLocation, inputtedLandmarks, inputtedDates, inputtedDescription);


    $(".entries").show();
    $("ul#entries").append("<li><span class='publish'>" + newPlace.name + "</span></li>");
    $(".publish").last().click(function(){//may be broken
      $("#details").show();
      $("#detail-list h2").text( newPlace.name );
      $("#detail-list .location").text(newPlace.location );
      $("#detail-list .landmarks").text(newPlace.landmarks );
      $("#detail-list .dates").text(newPlace.dates );
      $("#detail-list .description").text(newPlace.description );
    });
    $(".input").val("");
  })
})
