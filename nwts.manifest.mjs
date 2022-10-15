import package_json from "./package.json" assert {type : "json"};

let { name, displayName } = package_json;

if (! displayName) { displayName = name; }

/** @type {import("nwts-tools/types/nwjs_manifest").NWJSManifest} */
export const manifest = {
  name: displayName,
  domain: name,
  main: process.env.NODE_ENV === "development"
          ? `http://localhost:${process.env.PORT}`
          : "index.html",
  window: {
    width: 500,
    height: 500,
    position: "center",
  },
  "node-remote": ["<all_urls>"],
  "chromium-args": process.env.NODE_ENV === "development"
                     ? `--enable-extensions --load-extension=react_devtools`
                     : undefined
};
