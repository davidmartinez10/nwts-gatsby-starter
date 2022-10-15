import type {GatsbyNode} from "gatsby";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"]
  = async    function({actions}) {
         actions.setWebpackConfig({
           devtool: "inline-source-map",
         });
    };
