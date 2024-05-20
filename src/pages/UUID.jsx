import { v4 as uuidv4 } from "uuid";
import Page from "../components/Page";
import { useState, useEffect } from "react";

function UUIDPage() {
  const [uuids, setUuids] = useState([""]);
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count) {
      const newUuids = [];
      for (let i = 0; i < count; i++) {
        newUuids.push(uuidv4());
      }
      setUuids(newUuids);
    }
  }, [count]);

  return (
    <Page title="UUID generator">
      <h1>UUID generator</h1>

      <div className="row">
        <div className="col col-6">
          <label htmlFor="count">How many?</label>
          <input
            type="number"
            onChange={(e) => setCount(e.target.value)}
            value={count}
            id="count"
          />
        </div>
      </div>

      <textarea
        rows="30"
        disabled
        value={uuids.join("\n")}
        className="monospace"
      />
    </Page>
  );
}

export default UUIDPage;
export const Component = UUIDPage;
Component.displayName = "UUIDPage";
