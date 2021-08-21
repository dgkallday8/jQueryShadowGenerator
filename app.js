function cssShadow({
  font_size,
  offset_x,
  offset_y,
  blur,
  opacity,
  color,
  rgba
}) {
  const cssStyle = offset_x + 'px ' + offset_y + 'px ' + blur + 'px ' + rgba
  $('h1').css('text-shadow', cssStyle)
  $('#resultHex').val('background-color: ' + color + '\nopacity: ' + opacity + '\nfont-size: ' + font_size + 'px')
  $('#resultRgba').val('text-shadow: ' + offset_x + 'px ' + offset_y + 'px ' + blur + 'px ' + rgba + '\nfont-size: ' + font_size)
}
cssShadow({
  font_size: 40,
  offset_x: 4,
  offset_y: -1,
  blur: 0,
  opacity: 1,
  color: '#ff0000',
  rgba: 'a(255, 0, 0, 1)'
})
$(document).on('input change', 'input', function() {
  const fontSize = $('#font_size').val()
  const offsetX = $('#offset_x').val()
  const offsetY = $('#offset_y').val()
  const blur = $('#blur').val()
  const opacity = $('#opacity').val()

  const color = $('input[type="color"]').val() + ''
  const red16 = color[1] + '' + color[2]
  const green16 = color[3] + '' + color[4]
  const blue16 = color[5] + '' + color[6]
  const red10 = parseInt(red16, 16)
  const green10 = parseInt(green16, 16)
  const blue10 = parseInt(blue16, 16)

  const rgba = 'rgba(' + red10 + ', ' + green10 + ', ' + blue10 + ', ' + opacity + ')'

  $('h1').css('font-size', fontSize + 'px')
  cssShadow({
    font_size: fontSize,
    offset_x: offsetX,
    offset_y: offsetY,
    blur,
    opacity,
    color,
    rgba
  })
})
