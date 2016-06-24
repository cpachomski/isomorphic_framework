var gulp = require('gulp');
var babel = require('gulp-babel');
var nodemon = require('gulp-nodemon');
var sequence = require('run-sequence');

gulp.task('compile', function() {
	console.log('GULP | COMPILE |');
	return gulp.src('src/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('start', function() {
	nodemon({
		watch: 'dist',
		script: 'dist/index.js',
		ext: 'js',
		env: { 'NODE_ENV': 'development'}
	});
});

gulp.task('copy', function() {
	return gulp.src('src/**/*.html')
		.pipe(gulp.dest('dist'));
})

gulp.task('watch', function() {
	gulp.watch(['src/**/*.js', 'src/**/*.html'], ['compile', 'copy'])
})

gulp.task('default', function(callback){
	sequence(['watch', 'compile', 'copy'], 'start', callback);
});
