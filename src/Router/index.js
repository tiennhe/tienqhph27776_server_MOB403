const studentRouter = require('./../Router/studentRouter');




function routerfunction(app){
    app.use('/' , studentRouter)


}
module.exports  = routerfunction