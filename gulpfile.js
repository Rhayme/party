var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy:true});

var path = './app/scss/*.scss';
/**
 * This task is compiling SCSS into css. 
 */
gulp.task('sass', function(){

    log('Compiling SCSS -> CSS');
    return gulp
    .src(path)
    .pipe($.sass())
    .pipe(gulp.dest('./app/css'))
});


/**
 * this task automatically update our file
 */
gulp.task('watch', function(){
    log('Watching  files');
    gulp.watch(path, ['sass'])
});


/**
 * this tack run the task just by typing only  gulp in terminal
 */
gulp.task('default', ['sass', 'watch']);

///////////////////////////////////////////////
/**
 * log is a guntion that is going to log a message wheteve is being pass
 */

 function log(msg){
     if(typeof(msg) === 'object'){
         for (var item in msg){
                if(msg.hasOwnProperty(item)){
                    $.util.log($.util.colors.blue(msg))
                }
         }
     }else{
          $.util.log($.util.colors.blue(msg))
     }
 }


