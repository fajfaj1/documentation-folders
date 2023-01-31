const headers = document.querySelectorAll('.sidebar-heading')
headers.forEach(header => {

    const section = header.nextElementSibling

    change(section, 'folded')
    
    header.addEventListener('click', () => {

        const state = section.getAttribute('state')


        if(state == "folded") {
            change(section, 'unfolded')
        } else {
            change(section, 'folded')
        }

    })
})


function change(section, state) {
    section.setAttribute('state', state)
    const head = section.previousElementSibling
    head.setAttribute('state', state)
}
