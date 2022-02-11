
const polyfillLibrary = require('polyfill-library');
module.exports = async (req, res) => { 
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