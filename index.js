const Koa = require('koa');
const Router = require('@koa/router');
const app = new Koa();
const router = new Router;

const PORT = process.env.PORT || 5000

const config = require('config');

router.get('/', (ctx, next) => {
    ctx.body = 'Hola mundo'
});

app
    .use(router.routes())
    .use(router.allowedMethods());

console.log(`Listening no ${PORT}`);
console.log(`Variable ${ config.get('some-key') }`);
app.listen(PORT);