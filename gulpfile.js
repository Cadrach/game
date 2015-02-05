var combiner = require('stream-combiner2');
var uglify = require('gulp-uglify');
var gulp = require('gulp');

gulp.task('default', function() {
    var combined = combiner.obj([
        gulp.src('public/js/*.js'),
        uglify(),
        gulp.dest('public/build')
    ]);

    // any errors in the above streams will get caught
    // by this listener, instead of being thrown:
    combined.on('error', console.error.bind(console));

    return combined;
});