var gulp=require("gulp");
var uglify=require("gulp-uglify");
gulp.task('uglify',function(){
	return gulp.src('js/**/main.js').pipe(uglify()).pipe(gulp.dest('build'));
})
hi dev