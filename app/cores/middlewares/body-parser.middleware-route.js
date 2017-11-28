import KoaBodyParser from 'koa-bodyparser'

export default function connectMiddleware (app) {
  app.use(new KoaBodyParser())
}
