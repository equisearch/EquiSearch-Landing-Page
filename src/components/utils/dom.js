import $ from "jquery";

// jquery plugin for smooth scroll on a web page
export function smoothScroll() {
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
}

// when called, brings user back to the top of the page
export function backToTop() {
    window.addEventListener("scroll", () => {
        let currPosition = window.pageYOffset;
        const button = document.querySelector(".back-to-top");

        currPosition > 1000 ? button.style.right = "25px" : button.style.right = "-50px";
    });
}