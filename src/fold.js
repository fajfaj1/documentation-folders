
addEventListener('load', loadConfig)

function loadConfig() {
    getConfig()
        .then(config => {
            const defaultState = config.state
            const favicon = config.favicon
            console.log(defaultState)
            initiateFolders(defaultState.toLowerCase())
        })
}

function initiateFolders(defaultState) {
    const headers = document.querySelectorAll('.sidebar-heading')

    headers.forEach(header => {

        const section = header.nextElementSibling

        change(section, defaultState)
        header.addEventListener('click', () => {
            console.log('clicked', section)
            const state = section.getAttribute('state')


            if (state == "folded") {
                change(section, 'unfolded')
            } else {
                change(section, 'folded')
            }

        })
    })
    
}

function change(section, state) {
    section.setAttribute('state', state)
    const head = section.previousElementSibling
    head.setAttribute('state', state)
}

function getConfig() {
    let config = chrome.storage.sync.get(['state', 'favicon'])
    return config
}