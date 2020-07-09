
const sections = document.querySelectorAll(".section");
const nav_section_option = {};
const nav_section_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        }
        console.log(entry.target.id)
        const main_footer_navLists = document.querySelectorAll(".footer_link")

        if (entry.target.id === "hero") {
            main_footer_navLists.forEach(list_item => {
                if (list_item.id === "home_footer_list") {
                    list_item.classList.add("active")
                }
                if (list_item.id === "about_footer_list") {
                    list_item.classList.add("active")
                }
            });
        }
    })
}, nav_section_option)
sections.forEach(section => {
    nav_section_observer.observe(section)
})
