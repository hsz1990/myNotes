const Koa = require('koa');
const app = new Koa();
const logger = (ctx, next) => {
	console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
	next();
}
const one = (ctx, next) => {
	console.log('>> one');
	next();
	console.log('<< one');
}
const two = async (ctx, next) => {
	console.log('>> two');
	await next(); 
	console.log('<< two');
}
const three = (ctx, next) => {
	console.log('>> three');
	next();
	console.log('<< three');
}
const four = async (ctx, next) => {
	console.log('>> four');
	await next();
	console.log('<< four');
	ctx.body = 'tets.......'
}
app.use(logger);
app.use(one);
app.use(two);
app.use(three);
app.use(four);
app.listen(3000);