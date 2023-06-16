$(document).ready(function() {
    function slideLeft() {
        var container = $(".carousel-container");
        var firstImg = container.find(".slide-image:first");
        var imgWidth = firstImg.width();
  
        container.animate({ marginLeft: -imgWidth }, 'slow', function() {
            container.append(firstImg);
            container.css("margin-left", 0);
        });
    }
    setInterval(slideLeft, 5000);
});