var gulp = require('gulp'),
    compass = require('gulp-compass'),
    browserify = require('browserify'),
    debowerify = require('debowerify'),
    source = require('vinyl-source-stream'),
    watch = require('gulp-watch'),
    uglifyify = require('uglifyify'),
    uglify = require('gulp-uglify');

var bourbonDir = 'js/libs/bourbon/app/assets/stylesheets',
    sassDir = './sass/*.scss',
    sassConfig = './config.rb',
    cssDir = 'css',
    browserifyTransforms = [debowerify],
    minifyJs = process.env.MINIFY_JS == '1';

if (minifyJs) {
  browserifyTransforms.push(uglifyify);
}

gulp.task('compass', function() {
  gulp.src(sassDir)
    .pipe(compass({
      config_file: sassConfig,
      import_path: [bourbonDir],
      css: 'css',
      sass: 'sass'
    }))
    .pipe(gulp.dest(cssDir));
});

gulp.task('compass:watch', function() {
  gulp.src(sassDir)
    .pipe(compass({
      config_file: sassConfig,
      import_path: [bourbonDir],
      css: 'css',
      sass: 'sass',
      task: 'watch'
    }))
    .pipe(gulp.dest(cssDir));
});


gulp.task('js', function() {
  browserify({
    entries: ['./js/main.js'],
    debug: true,
    transform: browserifyTransforms,
    extensions: ['.js']
  })
    .on('error', function(err){
      console.log(err.message);
      this.end();
    })
    .bundle()

    // Output to the build directory
    .pipe(source('main.js'))
    .pipe(gulp.dest('./js/build/'));

  var stream = gulp.src('./js/libs/modernizr/modernizr.js');
  if (minifyJs) {
    stream = stream.pipe(uglify());
  }
  stream
    .pipe(gulp.dest('./js/build/'));
});


gulp.task('js:watch', function () {
  gulp.start('js');
  watch('js/**/*.js', function () {
    gulp.start('js');
  });
});

gulp.task('default', ['compass', 'js']);
