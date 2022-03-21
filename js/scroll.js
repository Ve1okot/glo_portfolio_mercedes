const links = document.querySelectorAll('.menu-list__link')
const btn = document.querySelector('.main__button')
const btnScroll = document.querySelector('.main__scroll')

const allLinks = [...links, btn, btnScroll] //...links берёт все элементы массива links

allLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()

        const id = link.getAttribute('href').substring(1)
        const section = document.getElementById(id)

        if (section) {
            seamless.scrollIntoView(section, { //плавный скролл в т.ч. для Сафари
                behavior: "smooth",
                block: "center",
                inline: "center",
            })
        }
    })
})