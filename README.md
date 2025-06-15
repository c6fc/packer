# @c6fc/packer

Link and use the Packer binary with NPM.

## Usage

```sh
npm install -p @c6fc/packer
```

Set the `packer_version` config element in your `package.json`:

```json
"config": {
	"packer_version": "1.13.1"
}
```

```javascript
const packer = require('@c6fc/packer'); // Install and link Packer 1.13.1

console.log(packer); 

/* {
	cacheDir: <path to Packer cache>
	version: <the version of Packer that's loaded>
	executablePath: <the path to the Packer executable>
} */
```

I created this package specifically for use with Packer (@c6fc/spellcraft-packer), but perhaps someone else will find it useful.