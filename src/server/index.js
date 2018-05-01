import express from 'express';
import opn from 'opn';
import dev from 'webpack-dev-middleware';
import webpack from 'webpack';
import config from './webpack';

const server = express();

server.use(dev(webpack(config), {publicPath: config.output.publicPath}));

server.get('/api/example-get/:id', (req, res) => {
    res.json({id: req.params.id, number: Math.random()});
});

server.get('/', (req, res) => {
    res.send(
        `
        <html>
        <head>
            <title>Demo App</title>
        </head>
        <body>
            <main id="app"></main>
            <script src="/assets/main.js" async defer></script>
        </body>
        </html>
        `
    );
});

const port = process.env.npm_package_config_port;

server.listen(port, (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`listening on port ${port}`);
    opn(`http://localhost:${port}`);
});
