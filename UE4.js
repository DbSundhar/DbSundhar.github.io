var createError = require("http-errors");
var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var {router} = require("./server")


var app = express();

app.use(express.json())
//app.use(express.urlencoded({extended:false}));
app.use(cookieParser())
app.use(express.static(path.join(__dirname,'public')))



app.use('/',router)

// app.use(function(req ,res,next){
//     next(createError(404));
   
// })
// app.use(function(req ,res,err){
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err:{};
//     res.status(err.status || 500)
//     res.render('error')
// });

app.listen(8000);

