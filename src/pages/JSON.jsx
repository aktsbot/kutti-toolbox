import Page from "../components/Page";

function JSONPage() {
  return (
    <Page title="JSON">
      <h1>JSON page</h1>
    </Page>
  );
}

export default JSONPage;

// new react route 6 bullshit.
export const Component = JSONPage;
Component.displayName = "JSONPage";
