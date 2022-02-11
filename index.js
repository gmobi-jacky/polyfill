const express = require('express');
const polyfillLibrary = require('polyfill-library');

const app = express();

app.get('/', (req, res) => {
    polyfillLibrary.getPolyfillString({
        uaString: req.get('user-agent'),
        minify: false,
        features: {
            'es6': { flags: ['gated'] }
        }
    }).then(function (bundleString) {
        res.send(`
        UA: ${req.get('user-agent')} <br>
        <pre>${bundleString}<pre>
        `)
    });
}
);

const port = process.env.PORT || 80;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));