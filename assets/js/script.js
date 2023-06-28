/*DOMContentLoaded event ensures script runs after doc's finished loading. Height of header's retrievef using offSetHeight &
selects all links inside header with href attr starting with #. When links are clicked, default behaviour is prevented & target
element ID is retrieved, with target position calculated with getBoundingClientRect().top, window.scrollyY & header height, &
scrolls to target pos with window.scrollTo()
 */
document.addEventListener("DOMContentLoaded", function() {
    var headerHeight = document.querySelector(".header").offsetHeight;
    var links = document.querySelectorAll(".header a[href^='#']");

    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var targetId = link.getAttribute("href").substring(1);
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                var targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
/*Taking the user back to top of page when <h1>Charlotte Philipps</h1> is clicked by adding event listener to h1 element 
with class headerTitle. Event listener is triggered when <h1> element is clicked with window.scrollTo() function being called
with top: 0 so it scrolls to top of page with smooth scroll behaviour*/
    var headerTitle = document.querySelector(".header h1");
    headerTitle.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});