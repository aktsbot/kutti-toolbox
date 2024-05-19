import Page from "../components/Page";

function RandomstringPage() {
  return (
    <Page title="Random string generator">
      <h1>Randomstring page</h1>
    </Page>
  );
}

export default RandomstringPage;
export const Component = RandomstringPage;
Component.displayName = "RandomstringPage";
