var gulp = require("gulp");
var rename = require("gulp-rename");
var run = require("gulp-run");
var sourcemaps = require('gulp-sourcemaps');
var ts = require("gulp-typescript");
var mocha = require("gulp-mocha");

var tsproj = ts.createProject("tsconfig.json");

// Default task, builds all typescript files
// Depends on gen-grammar
gulp.task("default", ["gen-grammar"], function () {
  return tsproj.src()
        .pipe(sourcemaps.init())
        .pipe(tsproj()).js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("bin"));
});

// Generates grammar
gulp.task("gen-grammar", function () {
  return run("nearleyc src/parser/Grammar.ne -o src/parser/Grammar.ts").exec()
});

gulp.task('test', ['default'], () =>
  gulp.src('test/astSpec.js')
      .pipe(mocha())
      .once('error', () => {
          process.exit(1);
      })
      .once('end', () => {
          process.exit();
      })
);
