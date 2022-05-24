function clickOnArrow(template) {
  const arrow = template.querySelector('.header__events-arrow');
  const event = template.querySelector('.header__events-event');

  arrow.addEventListener('click', () => {
    event.classList.toggle('header__events-event_active');
    arrow.classList.toggle('header__events-arrow_active');
  });
}

export default clickOnArrow