function handleGetIntervalsX() {
  const events = document.querySelectorAll('.header__events-text');
  const eventsArr = []
  events.forEach((item) => {eventsArr.push(item.innerHTML)})
  return eventsArr
}

export default handleGetIntervalsX