$(document).ready(function() {
    var username = sessionStorage.getItem("name");
  
    var homeLink = document.getElementById("homeLink");
    homeLink.href += "?name=" + username;
  
    var addActivityLink = document.getElementById("addActivityLink");
    addActivityLink.href += "?name=" + username;
  
    var myActivityLink = document.getElementById("myActivityLink");
    myActivityLink.href += "?name=" + username;
  
    var profileLink = document.getElementById("profileLink");
    profileLink.href += "?name=" + username;
  });