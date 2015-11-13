var path = require('path'),
    gulp = require('gulp'),
    compass = require('gulp-compass');

var bourbonEntryPoint = require.resolve('bourbon'),
    bourbonDir = path.dirname(bourbonEntryPoint) + '/app/assets/stylesheets',
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
