#!/usr/bin/env zx
import "zx/globals";
import "../nwts.config.mjs";

const gatsby = $`gatsby develop -p ${process.env.PORT}`;

await Promise.all([
  $`npx zx scripts/update_manifest.mjs`,
  $`npx wait-on http://localhost:${process.env.PORT}`
]);
await $`npx nwts-run`;

gatsby.nothrow().kill();
