document.addEventListener("DOMContentLoaded", function() {
    var headerHeight = document.querySelector(".header").offsetHeight;
    var links = document.querySelectorAll(".header a[href^='#']");

    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var targetId = link.getAttribute("href").substring(1);
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    var HeaderTitle = document.querySelector(".headerh1");
    HeaderTitle.addEventListener("click", function() {
        window.scrollTo({
            top:0,
            behaviour: "smooth"
        });
    });
});