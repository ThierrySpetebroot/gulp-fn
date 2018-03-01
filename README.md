# gulp-fn
A simple function injection plugin for [gulp](http://gulpjs.com/)

It allows to run custom callback functions in the gulp pipeline without having to deal with the NodeJS event-stream.

## usage
Install npm package

```
npm install gulp-fn
```

Use it in your Node.js code

```js
var gulp    = require('gulp');
var gulpFn  = require('gulp-fn');

gulp.task('hello_gulp-fn', function() {
    gulp.src('./gulp-fn.js')
      .pipe(gulpFn(function(file, enc) {
          console.log("Hello " + file.path);
      })
    );
});
```

## API
```js
gulpFn(fn, filter = true) : Transform
```

- fn, `function(file, enc) => void` - required - callback function invoked for each file in the stream.
- filter, `boolean - default: true` - if `true` pushes the file in the pipeline automatically (it is not possible to remove or add file to the stream).


NOTE: to add a file to the next step of the pipeline, you need to set the `filter` argument to `false` and use `this` (i.e., `this.push(file)` will add the file - done for every file by default or if `filter` is set to `true`).
