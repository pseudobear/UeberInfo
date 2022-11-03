const { src, dest, watch, series, lastRun } = require("gulp");
const zip = require("gulp-zip");
const path = require("path");

const widgetLocation = `${process.env.HOME}/Library/Application Support/Übersicht/widgets`;

const buildDist = () => (
    src("./UeberInfo.widget/**/*", { since: lastRun(buildDist) })
      .pipe(dest("./dist/UeberInfo.widget"))
)

const makeZip = () => (
    src("./UeberInfo.widget/**")
      .pipe(zip("UeberInfo.widget.zip"))
      .pipe(dest("./"))
)

const apply = () => (
    buildDist()
      .pipe(dest(path.join(widgetLocation, 'UeberInfo.widget')))
)

const dev = () => {
    watch('./UeberInfo.widget/**/*', { ignoreInitial: false }, apply);
}

exports.default = buildDist;
exports.apply = apply;
exports.dev = dev;
exports.release = series(buildDist, makeZip);

