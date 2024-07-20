const accordians = document.querySelectorAll('.accordian')

accordians.forEach(accordian => {
  const icon = accordian.querySelector('.icon')
  const answer = accordian.querySelector('.answers')

  accordian.addEventListener('click', () => {
    answer.classList.toggle('active')

    if (answer.classList.contains('active')) {
      icon.setAttribute('src', './assets/images/icon-minus.svg')
    } else {
      icon.setAttribute('src', './assets/images/icon-plus.svg')
    }
  })
})
