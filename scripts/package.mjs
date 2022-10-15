#!/usr/bin/env zx
import "zx/globals";
import "../nwts.config.mjs";

const del = fs.remove(process.env.PACKAGE_DIRECTORY).catch(() => void 0);

await $`npm run build`;
await $`npm run compile`;
await del;
await $`npx nwts-package`;
