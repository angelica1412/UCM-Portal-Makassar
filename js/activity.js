$ = function (id) {
    return document.getElementById(id);
  }
  
  var show = function (id) {
    $(id).style.display = 'flex';
  }
  var hide = function (id) {
    $(id).style.display = 'none';
  }
  
  window.addEventListener('click', function(event) {
    var popup = document.getElementById('popup');
    if (event.target == popup) {
        hide('popup');
    }
  });