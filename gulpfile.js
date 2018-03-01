const gulp = require('gulp');
const ts = require('gulp-typescript');
const merge = require('merge2');
const sourcemaps = require('gulp-sourcemaps');
const clean = require('gulp-clean');
const tslint = require("gulp-tslint");



gulp.task('clean', function () {
    return gulp.src('dist/*', {read: false})
        .pipe(clean());
});
 
gulp.task("tslint", () =>
    gulp.src("src/**/*.ts")
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report())
); 


gulp.task('generateLibEs6', function() {
    var tsResult = gulp.src('src/**/*.ts')
    	.pipe(sourcemaps.init()) // This means sourcemaps will be generated
        .pipe(ts({
            module: "commonjs",
            declaration: true,
            target: 'ES6',
            sourceMap: true,
            noImplicitAny:true
        }));
 
    return merge([
        tsResult.dts.pipe(gulp.dest('dist/definitions')),
        tsResult.js.pipe(gulp.dest('dist/js'))
    ]);
});

gulp.task('generateLib', function() {
    var tsResult = gulp.src('src/**/*.ts')
        .pipe(ts({
        	module: "commonjs",
            declaration: true,
            target: 'ES5',
            sourceMap: true,
            noImplicitAny:true
        }));
 
    return merge([
        tsResult.dts.pipe(gulp.dest('dist/definitions')),
        tsResult.js.pipe(gulp.dest('dist/js'))
    ]);
});




gulp.task('default', ['clean', 'tslint', 'generateLibEs6']);
