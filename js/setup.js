document.getElementById("default").click();

function tabToggle(evt, cityName) {
  var i, tContent, tLinks;
  tContent = document.querySelectorAll(".tContent");

  for (i = 0; i < tContent.length; i++) {
    tContent[i].style.display = "none";
  }

  tLinks = document.querySelectorAll(".tLinks");

  for (i = 0; i < tLinks.length; i++) {
    tLinks[i].className = tLinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}