import soldierRouter from './soldier/soldier.routes.mjs';
import generalRouter from './general/general.routes.mjs'

export function registerRoutes(app) {
    app.use('/', generalRouter);
    app.use('/soldier', soldierRouter);
}