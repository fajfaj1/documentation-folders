document.getElementById('save').addEventListener('click', save)

function save() {
    const config = load()
    chrome.storage.sync.set({
        state: config[0],
        favicon: config[1]
    })
    saveComplete()
}

function load() {
    const fields = ['state', 'favicon']
    const values = []
    fields.forEach(id => {
        values.push(document.getElementById(id).value)
    })

    return values
}
document.addEventListener('DOMContentLoaded', restore)


function restore() {
    getConfig()
        .then(config => {
            const fields = ['state', 'favicon']
            fields.forEach(id => {
                document.getElementById(id).value = config[id]
            })

            console.log(config)    
        })
    
}
function getConfig() {
    let config = chrome.storage.sync.get(['state', 'favicon'])
    return config
}

function saveComplete() {
    const statusBar = document.getElementById('statusBar')
    statusBar.addEventListener('click', () => {
        statusBar.style.opacity = 0
        setTimeout(() => {statusBar.style.display = 'none' }, '500')
    })
    console.log(statusBar)
    statusBar.style.display = 'flex'
    setTimeout(() => {statusBar.style.opacity = 1})
}

function setFavicon(icon) {
    if(icon=='Custom Command bot') {
        const link = `https://cdn.discordapp.com/icons/832255686783533066/f7131f694c6e1a2bd9c360d8b525d4e3.webp`
    } else if(icon=='Dashboard') {
        const link = `https://ccommandbot.com/public/landing/cc.png`
    } else {
        const link = ""
    }
    document.querySelector('head').append(`<link rel="shortcut icon" href="${link}">`)
}