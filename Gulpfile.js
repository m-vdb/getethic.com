var gulp = require('gulp'),
    compass = require('gulp-compass'),
    browserify = require('browserify'),
    debowerify = require('debowerify'),
    source = require('vinyl-source-stream'),
    watch = require('gulp-watch'),
    uglifyify = require('uglifyify'),
    uglify = require('gulp-uglify');

var bourbonDir = './public/js/libs/bourbon/app/assets/stylesheets',
    sassDir = './sass/*.scss',
    sassConfig = './config.rb',
    cssDir = './public/css',
    browserifyTransforms = [debowerify],
    minifyJs = process.env.MINIFY_JS == '1',
    browserifyDebug = !minifyJs;

if (minifyJs) {
  browserifyTransforms.push([uglifyify, {sourcemap: false}]);
}

gulp.task('compass', function() {
  gulp.src(sassDir)
    .pipe(compass({
      config_file: sassConfig,
      import_path: [bourbonDir],
      css: 'public/css',
      sass: 'sass'
    }))
    .pipe(gulp.dest(cssDir));
});

gulp.task('compass:watch', function() {
  gulp.src(sassDir)
    .pipe(compass({
      config_file: sassConfig,
      import_path: [bourbonDir],
      css: 'public/css',
      sass: 'sass',
      task: 'watch'
    }))
    .pipe(gulp.dest(cssDir));
});

function bundle(sourceFileName) {
  browserify({
    entries: ['./public/js/' + sourceFileName],
    debug: browserifyDebug,
    transform: browserifyTransforms,
    extensions: ['.js']
  })
    .on('error', function(err){
      console.log(err.message);
      this.end();
    })
    .bundle()

    // Output to the build directory
    .pipe(source(sourceFileName))
    .pipe(gulp.dest('./public/js/build/'));
}

gulp.task('js', function() {
  bundle('main.js');
  bundle('faq.js');
  bundle('joining.js');

  var stream = gulp.src('./public/js/libs/modernizr/modernizr.js');
  if (minifyJs) {
    stream = stream.pipe(uglify());
  }
  stream
    .pipe(gulp.dest('./public/js/build/'));
});


gulp.task('js:watch', function () {
  gulp.start('js');
  watch(['public/js/**/*.js', '!public/js/build/*'], function () {
    gulp.start('js');
  });
});

gulp.task('default', ['compass', 'js']);
