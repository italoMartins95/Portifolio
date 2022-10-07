const scrol = new IntersectionObserver( entry => {
    entry[0].target.classList.add('viss')
    console.log(entry)
})

Array.from(document.querySelectorAll('.card')).forEach(element => {
    element.classList.add('viss')
})