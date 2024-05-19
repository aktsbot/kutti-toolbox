import { useEffect } from "react";

import Layout from "./Layout";

function Page(props) {
  useEffect(() => {
    if (props.title) {
      document.title = props.title;
    }
  }, [props.title]);

  return <Layout>{props.children}</Layout>;
}

export default Page;
