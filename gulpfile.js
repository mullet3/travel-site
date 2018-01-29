var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');

gulp.task('default', function() {
    console.log("hooray");
});

// Kickoff the HTLM funtion

gulp.task('html', function() {
    console.log("Imagine something useful being done to your HTML here");    
});

// Kickoff the Styles funtion

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssvars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));    
});

// Watch for changes

gulp.task('watch', function() { 
    
    //watch html
    
    watch('./app/index.html', function() { 
        gulp.start('html');
    });
    
    //watch css
    
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    });
});