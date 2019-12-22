//SLIDER
(function (window, document, undefined) {

  // code that should be taken care of right away

  window.onload = init;

  function init() {
    // the code to be called when the dom has loaded
    // #document has its nodes
    var scene = document.getElementById('testing');
    var parallax = new Parallax(scene);
  }

})(window, document, undefined);

var speed = 400;

$(document).ready(function () {
  var imgCount = $('.img').length
  $("#slider").on("change", function () {
    for (var i = 1; i <= imgCount; i++) {
      speed = 201 - this.value;
      $('#range').text(`1000px / ${speed/10}s`)
      speed = speed * (i / 1.25)
      $('#img-' + i).css({
        'animation-duration': speed + 's',
        'animation-name': 'float'
      });
    }
  });
});