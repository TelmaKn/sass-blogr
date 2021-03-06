var gulp = require("gulp");
// Requires the gulp-sass plugin
var sass = require("gulp-sass");

gulp.task("sass", function () {
  return gulp
    .src("./styles/sass/**/*.scss") // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest("css"));
});

gulp.task("watch", function () {
  gulp.watch("./styles/sass/**/*.scss", gulp.series(["sass"]));
  // Other watchers
});
