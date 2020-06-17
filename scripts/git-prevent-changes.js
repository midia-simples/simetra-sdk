/* eslint-disable */
const { exec } = require("shelljs")

exec("git add src/simetra-sdk-DEV.ts")
exec("git checkout HEAD -- src/simetra-sdk-DEV.ts")
