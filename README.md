# ghg-emission-did

<a href="https://stromdao.de/" target="_blank" title="STROMDAO - Digital Energy Infrastructure"><img src="./static/stromdao.png" align="right" height="85px" hspace="30px" vspace="30px"></a>

Create DID holding GHG Emissions

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install ghg-emission-did

## Useage as a module

```bash
npm install --save ghg-emission-did
```

```javascript
const ghgdid = require("ghg-emission-did");

const app = async function() {
  let did = new ghgdid({
    co2eq:10
  });
  console.log(await did.getJWT());
}
app();
```

## Payload for DID

| Parameter | Required | Description |
|---------|-------------|-------------|
| `co2eq`  | required | CO2 Emission in Grams |
| `scope`  | recommended | GHG Protocol Scope |
| `category`  | recommended | GHG Protocol Category in Scope |
| `keypair`  | recommended | Signing public and private key |
| `title`  | recommended | Description of emission event |

All other fields provided as parameters will be added as Payload.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate. Details on [contributing](./CONTRIBUTING.md).

## Maintainer / Imprint

<addr>
STROMDAO GmbH  <br/>
Gerhard Weiser Ring 29  <br/>
69256 Mauer  <br/>
Germany  <br/>
  <br/>
+49 6226 968 009 0  <br/>
  <br/>
kontakt@stromdao.com  <br/>
  <br/>
Handelsregister: HRB 728691 (Amtsgericht Mannheim)
</addr>

Project Website: https://co2offset.io/

## LICENSE
[Apache-2.0](./LICENSE)
