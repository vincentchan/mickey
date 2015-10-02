var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    postcss = require('gulp-postcss'),
    imageResize = require('gulp-image-resize'),
    parallel = require("concurrent-transform"),
    os = require("os"),
    cp = require('child_process');

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build', '--config=_config.yml'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['styles', 'jekyll-build'], function() {
  browserSync.init({
    server: {
      baseDir: '_site'
    },
    startPath: "/index.html"
  });
});

// To support opacity in IE 8

var opacity = function(css) {
  css.eachDecl(function(decl, i) {
    if (decl.prop === 'opacity') {
      decl.parent.insertAfter(i, {
        prop: '-ms-filter',
        value: '"progid:DXImageTransform.Microsoft.Alpha(Opacity=' + (parseFloat(decl.value) * 100) + ')"'
      });
    }
  });
};

/**
 * Compile files from sass into both assets/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('styles', function() {
  return gulp.src('_scss/main.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(autoprefixer({browsers: ['last 2 versions', 'Firefox ESR', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1']}))
    .pipe(postcss([opacity]))
    .pipe(gulp.dest('assets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('assets/css'));
});

/**
 * Automatically resize post feature images and turn them into thumbnails
 */
gulp.task("thumbnails", function () {
  gulp.src("assets/images/hero/*.{jpg,png}")
    .pipe(parallel(
      imageResize({ width : 350 }),
      os.cpus().length
    ))
    .pipe(gulp.dest("assets/images/thumbnail"));
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll
 * Watch _site generation, reload BrowserSync
 */
gulp.task('watch', function() {
  gulp.watch('_scss/**/*.scss', ['styles']);
  gulp.watch('assets/images/hero/*.{jpg,png}', ['thumbnails']);
  gulp.watch(['*.html',
          '*.txt',
          'about/**',
          '_posts/*.markdown',
          'assets/javascripts/**/**.js',
          'assets/images/**',
          'assets/fonts/**',
          '_layouts/**',
          '_includes/**',
          'assets/css/**'
        ],
        ['jekyll-build']);
  gulp.watch("_site/index.html").on('change', browserSync.reload);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['thumbnails', 'browser-sync', 'watch']);
