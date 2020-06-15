/* eslint-disable */
const { cd, exec } = require("shelljs");

cd("dist");
exec("git add .");
