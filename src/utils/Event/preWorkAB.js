function preWorkAB(template) {
  const allCheckbox = document.querySelectorAll('.header__events-checkbox');
  const outcome = template.querySelector('.header__events-issues');


  let name = '';
  allCheckbox.forEach((element,i) => {
    if (element.checked) {
      name += element.closest('.header__events-title').querySelector('.header__events-text').innerHTML;
      i !== allCheckbox.length - 1 ? name += '; ': name += '';
    }
  });

  outcome.remove();
  return name;
}

export default preWorkAB