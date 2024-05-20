import { useState } from "react";

import Page from "../components/Page";

function JSONPage() {
  const [inputStr, setInputStr] = useState("");
  const [outputStr, setOutputStr] = useState("");

  function handlePrettifyClick() {
    try {
      const inputJSON = JSON.parse(inputStr);
      const jsonStr = JSON.stringify(inputJSON, undefined, 2);
      setOutputStr(jsonStr);
    } catch (error) {
      setOutputStr(error.message);
    }
  }

  return (
    <Page title="JSON">
      <h1>Pretty print JSON</h1>

      <div className="row">
        <div className="col c5">
          <textarea
            rows="30"
            onChange={(e) => {
              setOutputStr("");
              setInputStr(e.target.value);
            }}
            value={inputStr}
            className="monospace"
            placeholder={`{"a": "b"}`}
          />
        </div>

        <div className="col c2 text-center">
          <button className="btn btn-sm" onClick={() => handlePrettifyClick()}>
            Prettify &gt;
          </button>
        </div>

        <div className="col c5">
          <textarea
            rows="30"
            value={outputStr}
            className="monospace"
            placeholder={`{\n  "a": "b"\n}`}
            readOnly
          />
        </div>
      </div>
    </Page>
  );
}

export default JSONPage;

// new react route 6 bullshit.
export const Component = JSONPage;
Component.displayName = "JSONPage";
