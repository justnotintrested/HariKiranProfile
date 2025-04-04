document.addEventListener("DOMContentLoaded", function() {
  const skillsList = document.querySelector("#skills ul");
  
  skillsList.addEventListener("mouseover", function() {
    alert("You hovered over the skills section!");
  });
});
