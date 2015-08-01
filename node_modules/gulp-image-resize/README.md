# [gulp](https://github.com/wearefractal/gulp)-image-resize [![Build Status](https://drone.io/github.com/scalableminds/gulp-image-resize/status.png)](https://drone.io/github.com/scalableminds/gulp-image-resize/latest)


> Resizing images made easy - thanks to [GraphicsMagick](http://www.graphicsmagick.org/) or [ImageMagick](http://www.imagemagick.org/).
> Fork of [grunt-image-resize](https://github.com/excellenteasy/grunt-image-resize).

## Install

Install with [npm](https://npmjs.org/package/gulp-image-resize)

```
npm install --save-dev gulp-image-resize
```

### GraphicsMagick or ImageMagick
Make sure GraphicsMagick or ImageMagick is installed on your system and properly set up in your `PATH`.

Ubuntu:

```shell
apt-get install imagemagick
apt-get install graphicsmagick
```

Mac OS X (using [Homebrew](http://brew.sh/)):

```shell
brew install imagemagick
brew install graphicsmagick
```

Windows & others: 

[http://www.imagemagick.org/script/binary-releases.php](http://www.imagemagick.org/script/binary-releases.php)

Confirm that ImageMagick is properly set up by executing `convert -help` in a terminal.


## Example

```js
var gulp = require('gulp');
var imageResize = require('gulp-image-resize');

gulp.task('default', function () {
  gulp.src('test.png')
    .pipe(imageResize({ 
      width : 100,
      height : 100,
      crop : true,
      upscale : false
    }))
    .pipe(gulp.dest('dist'));
});
```

## API

### imageResize(options)

#### options.width

Type: `Number`  
Default value: `0` (only if height is defined)

A number pixel value that is the target width.


#### options.height

Type: `Number`  
Default value: `0` (only if width is defined)

A number pixel value that is the target height.


#### options.upscale

Type: `Boolean`  
Default value: `false`

Determines whether images will be upscaled. If set to `false` (default), image will be copied instead of resized if it would be upscaled by resizing.


#### options.crop

Type: `Boolean`  
Default value: `false`

Determines whether images will be cropped after resizing to exactly match `options.width` and `options.height`.


#### options.gravity

Type: `String`  
Default value: `Center`  
Possible values: `NorthWest`, `North`, `NorthEast`, `West`, `Center`, `East`, `SouthWest`, `South`, `SouthEast`

When cropping images this sets the image gravity. Doesn't have any effect, if `options.crop` is `false`.


#### options.quality

Type: `Number`  
Default value: `1`

Determines the output quality of the resized image. Ranges from `0` (really bad) to `1` (almost lossless). Only applies to jpg images.


#### options.format

Type: `String`  
Default value: Format of the input file  
Possible values: `gif`, `png`, `jpeg` etc.

Override the output format of the processed file.

#### options.filter

Type: `String`  
Possible values: `Point`, `Box`, `Triangle`, `Hermite`, `Hanning`, `Hamming`, `Blackman`, `Gaussian`, `Quadratic`, `Cubic`, `Catrom`, `Mitchell`, `Lanczos`, `Bessel`, `Sinc`

Set the filter to use when resizing (e.g. Catrom is very good for reduction, while hermite is good for enlargement).

#### options.sharpen

Type: `Boolean`  
Default value: `false`

Set to `true` to apply a slight unsharp mask after resizing.

#### options.samplingFactor

Type: `Array[Cr, Cb]`  
Possible values: `[2, 2]` for 4:2:2, `[1, 1]` for 4:1:1

Define chroma subsampling

#### options.imageMagick

Type: `Boolean`  
Default value: `false`

Set to `true` when using ImageMagick instead of GraphicsMagick.


## More Examples
```js
// Converting from png to jpeg. No resizing.
gulp.task('convert_png', function () {
  return gulp.src('test.png')
    .pipe(imageResize({ format : 'jpeg' }))
    .pipe(gulp.dest('dist'));
});

// Only specify one dimension. Output image won't exceed this value.
gulp.task('width', function () {
  gulp.src('test.png')
    .pipe(imageResize({ 
      width : 100
    }))
    .pipe(gulp.dest('dist'));
});
```

## Recommended modules

* [concurrent-transform](https://github.com/segmentio/concurrent-transform): parallelize image resizing
```js
var parallel = require("concurrent-transform");
var os = require("os");

gulp.task("parallel", function () {
  gulp.src("src/**/*.{jpg,png}")
    .pipe(parallel(
      imageResize({ width : 100 }),
      os.cpus().length
    ))
    .pipe(gulp.dest("dist"));
});
```

* [gulp-changed](https://www.npmjs.org/package/gulp-changed/): only resize changed images
```js
var changed = require("gulp-changed");

gulp.task("changed", function () {
  gulp.src("src/**/*.{jpg,png}")
    .pipe(changed("dist"))
    .pipe(imageResize({ width : 100 }))
    .pipe(gulp.dest("dist"));
});
```

* [gulp-rename](https://www.npmjs.org/package/gulp-rename/): add a suffix or prefix
```js
var rename = require("gulp-rename");

gulp.task("suffix", function () {
  gulp.src("src/**/*.{jpg,png}")
    .pipe(imageResize({ width : 100 }))
    .pipe(rename(function (path) { path.basename += "-thumbnail"; }))
    .pipe(gulp.dest("dist"));
});
```

## Tests

1. You need both ImageMagick and GraphicsMagick installed on your system to run the tests.
2. Install all npm dev dependencies `npm install`
3. Install gulp globally `npm install -g gulp`
4. Run `gulp test`


## License

MIT © [scalable minds](http://scm.io)

