module.exports = () => {
    const express = require('express');
    const app = express();
    const port = 3000;
    const path = require('path')
    const { requestTime } = require('./middlewares')

    app.use(express.static(path.resolve(__dirname, 'static')))
    app.set('view engine', 'ejs')
    app.set('views', path.resolve(__dirname, 'templates'))
    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

    module.exports.app = app
}
