const hamburger = document.querySelector('.hamburger')
const sidebar = document.querySelector('.sidebar')

hamburger.addEventListener('click', () => {
    if(hamburger.className === 'hamburger') {
        hamburger.className = 'hamburger-x'
        sidebar.className = 'sidebar-active'
    } else {
        hamburger.className = 'hamburger'
        sidebar.className = 'sidebar'
    }
})