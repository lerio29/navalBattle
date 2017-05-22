const gulp = require('gulp');

const jshint = require('gulp-jshint');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const rollup = require('gulp-rollup');
const ts = require('gulp-typescript');

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
			            noImplicitAny: true,
			            module: 'commonjs',
			            target: 'es5'
			        }))
	        .pipe(gulp.dest('built/'));
	});

gulp.task('bundle', function() {
  gulp.src('./src/**/*.ts')
    // transform the files here. 
    .pipe(rollup())
    .pipe(gulp.dest('./built'));
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
