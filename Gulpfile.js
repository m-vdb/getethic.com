var gulp = require('gulp'),
    compass = require('gulp-compass'),
    browserify = require('browserify'),
    debowerify = require('debowerify'),
    source = require('vinyl-source-stream'),
    watch = require('gulp-watch');

var bourbonDir = 'js/libs/bourbon/app/assets/stylesheets',
    sassDir = './sass/*.scss',
    sassConfig = './config.rb',
    cssDir = 'css';
 
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
    transform: [debowerify],
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
});


gulp.task('js:watch', function () {
  gulp.start('js');
  watch('js/**/*.js', function () {
    gulp.start('js');
  });
});

gulp.task('default', ['compass', 'js']);
