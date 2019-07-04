
import qrcode from '../qrcode'

const $ = id => document.querySelector(id)
const reader = new FileReader
const img = $('#img')
const text = $('#text')
const error = $('#error')
reader.onload = function(e) {
  img.src = reader.result
}
$('#file').addEventListener('change', function(e) {
  if (this.files[0]) {
    reader.readAsDataURL(this.files[0])
  }
})

$('#decode').addEventListener('click',function() {
  qrcode.decode(img.src, function(err, data) {
    if (err) {
      error.innerText = err
      return console.log(err)
    }
    text.value = data
  })
});

$('#encode').addEventListener('click', function() {
  $('#qrcode-image').innerHTML = ''
  qrcode.encode($('#qrcode-image'), text.value)
})
