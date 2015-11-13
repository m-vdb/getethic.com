var path = require('path'),
    gulp = require('gulp'),
    compass = require('gulp-compass');

var bourbonEntryPoint = require.resolve('bourbon'),
    bourbonDir = path.dirname(bourbonEntryPoint) + '/app/assets/stylesheets';

 
gulp.task('compass', function() {
  gulp.src('./sass/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      import_path: [bourbonDir],
      css: 'css',
      sass: 'sass'
    }))
    .pipe(gulp.dest('css'));
});
