const gulp = require('gulp');

var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var ts = require('gulp-typescript');

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

gulp.task('tsc', function () {
	    return gulp.src('src/**/*.ts')
	        .pipe(ts({
			            noImplicitAny: true
			        }))
	        .pipe(gulp.dest('built/'));
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
