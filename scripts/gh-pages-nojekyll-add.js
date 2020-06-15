/* eslint-disable */
const { cd, exec, touch } = require("shelljs")

cd("docs")
touch(".nojekyll")
exec("git add .")
