import * as React from "react";
import type { HeadFC } from "gatsby";

import config from "../../gatsby-config";

document.body.style.margin = "0px";

const style = {
  app: {
    height: "100vh",
    padding: "3vw",
    paddingTop: "1vh",
    backgroundColor: "rgba(101, 152, 85, 0.791)",
    fontWeight: "420",
  },
  header: {
    minHeight: "5vh",
    fontSize: "calc(10px + 2vmin)",
    fontWeight: "600",
    marginBottom: "2vh",
    "text-align": "center",
    "box-sizing": "border-box",
  },
  logo: {
    "pointer-events": "none",
    float: "right" as const,
    padding: "1vw",
    maxWidth: "30vw",
    minWidth: "10vw",
  }
};

function App() {
  return (
    <div style={style.app}>
      <h1 style={style.header}>NW.ts Tools Gatsby Starter with HMR</h1>
      <img src="/nwts.svg" style={style.logo} />
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
    </div>
  );
}

export default App;

export const Head: HeadFC = () => <title>{config.siteMetadata?.title as string || "NW.ts Tools Gatsby Starter"}</title>;
