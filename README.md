
## QRCode Encoder and Decoder

> Based on [qrcodejs](https://github.com/davidshimjs/qrcodejs) and [jsqrcode](https://github.com/LazarSoft/jsqrcode)

### API in ES6

```js
import qrcode from 'qrcode'

qrcode.encode(document.getElementById('container'), 'some text to encode')

qrcode.decode(ImageBase64Str, (err, data) => {
    if (err) {
        return console.log(err)
    }
    console.log(data)
})
```

### Demo

```sh
npm install
npm run test
```