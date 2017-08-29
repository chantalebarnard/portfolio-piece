const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

// a task to compile our sass
gulp.task('styles', () => {
	return gulp.src('./dev/styles/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./public/styles'))
});

// task to compile our javascript
gulp.task('scripts', () => {
	return gulp.src('./dev//main.js')
		.pipe(babel({
			presets: ['es2015', 'es2016']
		}))
		.pipe(gulp.dest('./public/scripts'))
});

// a tas to watch all of my othr tasks 
gulp.task('watch', () => {
	gulp.watch('./dev/styles/**/*.scss', ['styles'])
	gulp.watch('./dev/scripts/main.js', ['scripts'])
})
gulp.task('default', ['styles', 'scripts', 'watch']);
