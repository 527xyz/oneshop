const gulp=require("gulp");
const del=require("del");
const cssmin=require("gulp-cssmin");
const autoprefixer=require("gulp-autoprefixer");
const uglify=require("gulp-uglify");
const babel=require("gulp-babel");
const htmlmin=require("gulp-htmlmin");
const webserver=require("gulp-webserver");




const libHandler=()=>{
    return gulp.src("./src/lib/**")
    .pipe(gulp.dest("./dist/lib"))
}
module.exports.lib=libHandler;

const phpHandler=()=>{
    return gulp.src("./src/php/**")
    .pipe(gulp.dest("./dist/php"))
}
module.exports.php=phpHandler;

const iconHandler=()=>{
    return gulp.src("./src/icon/**")
    .pipe(gulp.dest("./dist/icon"))
}
module.exports.php=iconHandler;

const imagesHandler=()=>{
    return gulp.src("./src/images/**")
    .pipe(gulp.dest("./dist/images"))
}
module.exports.images=imagesHandler;
const delHandler=()=>{
    return del(["./dist"])
}
module.exports.del=delHandler;
const webserverHandler=()=>{
    return gulp.src("./dist")
    .pipe(webserver({
        open:"./pages/index.html",
        livereload:true,

    }))
}
module.exports.webserver=webserverHandler;

const htmlHandler=()=>{
    return gulp.src("./src/pages/*.html")
    .pipe(htmlmin({
        removeAttributeQuotes:true,
        removeComments:true,
        collapseWhitespace:true,
        minifyCSS:true,
        minifyJS:true,
        collapseBooleanAttributes:true
    }))
    .pipe(gulp.dest("./dist/pages"))
}
module.exports.html=htmlHandler;

const cssHandler=()=>{
    return gulp.src("./src/css/*.css")
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest("./dist/css"))
}
module.exports.css=cssHandler;

const jsHandler=()=>{
    return gulp.src("./src/js/**")
    .pipe(babel({
        presets:["@babel/env"]
    }))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js"))
}
module.exports.js=jsHandler;

const watchHandler=()=>{
    gulp.watch("./src/css/*.css",cssHandler)
    gulp.watch("./src/js/*.js",jsHandler)
    gulp.watch("./src/pages/*.html",htmlHandler)
    gulp.watch("./src/images/**",imagesHandler)
    gulp.watch("./src/lib/**",libHandler)
    gulp.watch("./src/php/**",phpHandler)
    gulp.watch("./src/icon/**",iconHandler)

}
module.exports.default=gulp.series(
    delHandler,
    gulp.parallel(libHandler,imagesHandler,cssHandler,htmlHandler,jsHandler,phpHandler,iconHandler),
    webserverHandler,
    watchHandler
)