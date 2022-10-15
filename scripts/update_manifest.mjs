#!/usr/bin/env zx
import "zx/globals";
import "../nwts.config.mjs";

import {manifest} from "../nwts.manifest.mjs";

await fs.ensureDir(process.env.BUILD_DIRECTORY);
await fs.writeJSON(`${process.env.BUILD_DIRECTORY}/package.json`, manifest);
