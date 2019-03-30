// Less configuration
var gulp = require('gulp');
var less = require('gulp-less');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task('less', function() {
    gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('css/'));
});

gulp.task("typescript", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("js"));
});

gulp.task('default', ['less', 'typescript'], function() {
    gulp.watch('less/*.less', ['less']);
    gulp.watch('ts/*.ts', ['typescript']);
})