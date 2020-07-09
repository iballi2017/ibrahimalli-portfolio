$(document).ready(function () {
    // alert("hello world!")

    const inputs_values = document.querySelectorAll(".form_value")

    inputs_values.forEach(input => {
        input.addEventListener('keyup', function () {
            if (input.value != "") {
                $(this).siblings().css({
                    "top": "-0.7em",
                    "fontSize": ".8rem",
                    "transition": "all 300ms ease-in-out"
                })
                $(this).css({
                    "background-color": "unset",
                })

            } else {
                $(this).siblings().css({
                    "top": "unset",
                    "fontSize": "unset",
                    "transition": "all 300ms ease-in-out"
                })
            }
        });

    });
})


function open_sidebar() {
    document.getElementById("sidebar").classList.add("open_nav")
}
function close_sidebar() {
    document.getElementById("sidebar").classList.remove("open_nav")
}


// animating hero texts
option = {}
const custom_animate_from_top = document.querySelectorAll(".custom_animate_from_top")
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.remove("non_flow_in")
        entry.target.classList.add("flow_in")
    });
}, option)
custom_animate_from_top.forEach(element => {
    observer.observe(element)
});
