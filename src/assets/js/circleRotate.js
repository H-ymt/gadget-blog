window.addEventListener('scroll', () => {
  const rotation = (window.scrollY / window.innerHeight) * 360
  document.querySelector('.circle').style.transform =
    'translate(-50%, -50%) rotate(' + rotation + 'deg)'
})
