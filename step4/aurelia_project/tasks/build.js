import gulp from 'gulp';
import transpile from './transpile';
import processMarkup from './process-markup';
import processCSS from './process-css';
import copyFiles from './copy-files';
import {build} from 'aurelia-cli';
import project from '../aurelia.json';

export default gulp.series(
  processFonts,
  readProjectConfiguration,
  gulp.parallel(
    transpile,
    processMarkup,
    processCSS,
    copyFiles
  ),
  writeBundles
);

function processFonts() {
  return gulp
    .src('node_modules/materialize-css/dist/fonts/roboto/Roboto-*.*')
    .pipe(gulp.dest('materialize-css/fonts/roboto'));
}

function readProjectConfiguration() {
  return build.src(project);
}

function writeBundles() {
  return build.dest();
}
