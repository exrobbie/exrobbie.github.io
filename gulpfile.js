var gulp=require('gulp');
var uglify=require('gulp-uglify');
var jshint=require('gulp-jshint');
gulp.task('uglify',function(){
	return gulp.src('./src/js/main.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(uglify())
	.pipe(gulp.dest('./dest/js/'));
});
