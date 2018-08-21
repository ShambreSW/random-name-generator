var nameArray = ["Break!", "Brett", "Collin", "Corey", "Hal", "Mark", "Megan", "Natalia", "Petra", "Sheri", "Tom"];

function newName(){
  var randomNumber = Math.floor(Math.random() * (nameArray.length));
  document.getElementById("nameDisplay").innerHTML = nameArray[randomNumber];
}
