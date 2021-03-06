#!/usr/bin/env node

"use strict";

(async function () {
  let version;

  try {
    version = await require("./index")(
      process.argv[2],
      process.argv[3] === "alpha"
    );
  } catch (err) {
    console.log(err);
    process.stderr.write(err.message);
    process.exit(1);
  }

  process.stdout.write(version);
})();
