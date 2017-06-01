const gulp = require('gulp');

const jshint = require('gulp-jshint');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require('tsify');

gulp.task('lint', function() {
	    return gulp.src('js/*.js')
	        .pipe(jshint())
	        .pipe(jshint.reporter('default'));
	});

gulp.task('sass', function() {
	    return gulp.src('scss/*.scss')
	        .pipe(sass())
	        .pipe(gulp.dest('dist/css'));
	});

//https://www.typescriptlang.org/docs/handbook/gulp.html
gulp.task('bundle', function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify, { target: 'es5' })
    .bundle()
    .pipe(source('bro.js'))
    .pipe(gulp.dest('dist'));
});


gulp.task('scripts', function() {
	    return gulp.src('js/*.js')
	        .pipe(concat('all.js'))
	        .pipe(gulp.dest('dist'))
	        .pipe(rename('all.min.js'))
	        .pipe(uglify())
	        .pipe(gulp.dest('dist/js'));
	});

gulp.task('watch', function() {
	    gulp.watch('js/*.js', ['lint', 'scripts']);
	    gulp.watch('scss/*.scss', ['sass']);
	});


gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
