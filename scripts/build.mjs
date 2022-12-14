#!/usr/bin/env zx
import "zx/globals";
import "../nwts.config.mjs";

process.env.NODE_ENV = "production";

await $`npx gatsby build`;
await $`npx zx scripts/update_manifest.mjs`;
