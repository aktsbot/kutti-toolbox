import Page from "../components/Page";

function IndexPage() {
  return (
    <Page title="Home">
      <h1>The kutti toolbox</h1>
      <p>
        This page lists a series of client-side(browser only) tools to help the
        tired/lazy developer a.k.a <a href="https://aktsbot.in">me :)</a>.
      </p>

      <p>
        The top navbar lists the available tools and ofcourse you can get the
        source from{" "}
        <a href="https://github.com/aktsbot/kutti-toolbox">github</a>.
      </p>

      <p>Enjoy!</p>
    </Page>
  );
}

export default IndexPage;
