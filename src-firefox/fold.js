
addEventListener('load', loadConfig)

function loadConfig() {
    getConfig()
        .then(config => {
            const defaultState = config.state
            const favicon = config.favicon
            initiateFolders(defaultState.toLowerCase())
            setFavicon(favicon)
            console.log('CC documentation folder has been loaded successfully.')
        })
}

function initiateFolders(defaultState) {
    const headers = document.querySelectorAll('.sidebar-heading')

    headers.forEach(header => {

        const section = header.nextElementSibling

        change(section, defaultState)
        header.addEventListener('click', () => {
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

function setFavicon(icon) {
    let link = ""
    if(icon=='Custom Command bot') {
        link = `https://cdn.discordapp.com/icons/832255686783533066/f7131f694c6e1a2bd9c360d8b525d4e3.webp`
    } else if(icon=='Dashboard') {
        link = `https://ccommandbot.com/public/landing/cc.png`
    }
    const fav = document.createElement('link')
    fav.rel = 'shortcut icon'
    fav.href = link
    document.querySelector('head').appendChild(fav)
}