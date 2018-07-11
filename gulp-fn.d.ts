// Type definitions for gulp-fn v 0.0.3
// Project: https://github.com/ThierrySpetebroot/gulp-fn
// Definitions by: Thierry Spetebroot <https://github.com/ThierrySpetebroot> (http://tspetebr.me)
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>
import { Transform } from "stream";

declare function gulpFn(
    fn: (this: Transform, file: NodeJS.ReadWriteStream) => void, 
    filter?
): Transform;

export = gulpFn;
