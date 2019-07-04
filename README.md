
## QRCode Encoder and Decoder

> Based on [qrcodejs](https://github.com/davidshimjs/qrcodejs) and [jsqrcode](https://github.com/LazarSoft/jsqrcode)

### Install
Add Github repo url as dependency
```json
{
    "dependencies": {
        "qrcode": "git+https://github.com/tokenkit/qrcode.git"
    }
}
```
And
```sh
npm install
```

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

For more `qrcode.encode()` options, see [Base Usages](https://github.com/davidshimjs/qrcodejs#basic-usages)

### Demo

```sh
npm install
npm run test
```
