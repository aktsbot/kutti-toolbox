import Page from "../components/Page";

function UUIDPage() {
  return (
    <Page title="UUID generator">
      <h1>UUID page</h1>
    </Page>
  );
}

export default UUIDPage;
export const Component = UUIDPage;
Component.displayName = "UUIDPage";
