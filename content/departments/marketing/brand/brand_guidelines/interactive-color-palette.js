// Open color picker when clicking colors
for (const color of document.querySelectorAll('.color-palette.interactive .color')) {
  const value = color.querySelector('code').textContent
  const input = document.createElement('input')
  input.type = 'color'
  input.setAttribute('aria-readonly', 'true')
  input.value = value
  color.append(input)
  color.addEventListener('click', event => {
    if (window.getSelection().toString() === '') {
      input.click()
    }
  })
  // Ensure color picker is read-only
  input.addEventListener('input', event => {
    input.value = value
  })
}
