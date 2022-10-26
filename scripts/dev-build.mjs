#!/usr/bin/env zx
import "zx/globals";
import "../nwts.config.mjs";

await $`npx gatsby build`;

process.env.NODE_ENV = "production";
await $`npx zx scripts/update_manifest.mjs`;
await $`npx nwts-run`;
