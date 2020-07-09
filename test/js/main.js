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








// form submission
// const form_btn = document.querySelector(".form_btn")

// function sendData(data) {
//     const XHR = new XMLHttpRequest(),
//         FD = new FormData();

//     for (name in data) {
//         FD.append(name, data[name]);
//     }


//     XHR.addEventListener('load', (event) => {
//         alert("Yeah! Data sent and response loaded.")
//     });

//     XHR.addEventListener('error', (event) => {
//         alert("Oops! Something went wrong!")
//     });
//     // Set up our request
//     XHR.open('POST', 'https://ibrahim-alli-portfolio.firebaseio.com/');

//     XHR.send(FD);
// }

// form_btn.addEventListener('click', () => {
//     sendData({
//         test: "ok"
//     })
// })


// window.addEventListener("load", () => {
//     function sendData() {
//         const XHR = new XMLHttpRequest();
//         const FD = new FormData(form);

//         // Define what happens on successful data submission
//         XHR.addEventListener("load", function (event) {
//             alert(event.target.responseText);
//         });

//         XHR.addEventListener("load", (event) => {
//             alert("Oops! Something went wrong")
//         })

//         XHR.open("POST", "https://ibrahim-alli-portfolio.firebaseio.com/messages.json");

//         XHR.send(FD);
//     }
//     const form = document.getElementById("msgForm")
//     form.addEventListener("submit", (event) => {
//         event.preventDefault();

//         sendData();
//     })
// })

// Sending and receiving data in JSON format using POST method

var xhr = new XMLHttpRequest();
var url = "https://ibrahim-alli-portfolio.firebaseio.com/messages.json";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(json.email + ", " + json.password);
    }
};
var data = JSON.stringify({ "email": "hey@mail.com", "password": "101010" });
xhr.send(data);




// function sendMsg() {
//     console.log(document.getElementById("msgForm").client_name.value)
// }
