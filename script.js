document.querySelectorAll('.photo-gallery img').forEach(image => {
  image.onclick = () => {
    document.querySelector('.photo-popup').style.display = 'block';
    document.querySelector('.photo-popup img').src = image.getAttribute('src');
  }
});

document.querySelector('.photo-popup span').onclick = () => {
  document.querySelector('.photo-popup').style.display = 'none';
};

document.getElementById('phone-number').addEventListener('input', e => {
  let input = e.target.value.replace(/\D/g, '');
  let cleanInput = '';

  if(input.length > 0) cleanInput = `(${input.substring(0, 2)})`;
  if(input.length >= 3) cleanInput += ` ${input.substring(2, 7)}`;
  if(input >=8) cleanInput += `-${input.substring(7, 11)}`;
  if(input > 11) cleanInput += '';

  document.getElementById('phone-number').value = cleanInput;
});

