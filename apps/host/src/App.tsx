import React from "react";
import { useStoreSelector } from "./use-selector";
const App1 = React.lazy(() => import("app1/App"));

function App() {
  const data = useStoreSelector((state) => state);

  return (
    <>
      <App1 />
      <div className="App">host</div>
      <div>{data}</div>
    </>
  );
}

export default App;
