#!/usr/bin/env node
const path = require('path');
const es = require('event-stream');

const gulp = require('gulp');
const gulpFn = require('./gulp-fn');

gulp.task('count', function() {
	var actual = 0;

	return gulp.src('*.js')
		.pipe(gulpFn(function(){ actual++; }))
		.pipe(es.wait(function(){ console.log(actual); }))
});

gulp.task('hello_file', function() {
	return gulp.src(['**/*', '!node_modules{,/**}'])
		.pipe(gulpFn(function(file) {
			console.log(path.basename(file.path));
		}))
		.pipe(es.wait(function(){ console.log("END"); }));
});
