/*
Gulp-Fn
 */
const through = require('through2');
const PluginError = require('plugin-error');
const PLUGIN_NAME = 'gulp-fn';

const gulpFn = function(fn, filter) {
  if (!fn) {
    throw new PluginError(PLUGIN_NAME, "Missing fn parameter!");
  }

  if (filter === undefined)
    filter = true; // auto-push flag

  return through.obj(function(file, enc, callback) {
    if(filter) {
      /*
      Execute the passed function without "this" (to prevent side effects),
      Include the current file automatically in the pipeline.
       */
      fn(file, enc);
      this.push(file);
    } else {
      fn.call(this, file, enc);
    }

    return callback();
  });
};

module.exports = gulpFn;
