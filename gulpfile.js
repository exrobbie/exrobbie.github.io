var gulp=require('gulp');
var uglify=require('gulp-uglify');
var jshint=require('gulp-jshint');
var less=require('gulp-less');
gulp.task('js',function(){
	return gulp.src('./src/js/main.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(uglify())
	.pipe(gulp.dest('./dest/js/'));
});

gulp.task('css',function(){
	return gulp.src('./src/css/*.less')
	.pipe(less())
	.pipe(gulp.dest('./dest/css/'));
})
