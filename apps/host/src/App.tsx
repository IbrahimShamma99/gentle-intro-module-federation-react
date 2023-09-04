import React from "react";
import {} from "./store";
import { useStoreSelector } from "./use-selector";
const App1 = React.lazy(() => import("app1/App"));

function App() {
  const data = useStoreSelector((state) => state);

  console.log(data);

  return (
    <>
      <App1 />
      <div className="App">host</div>
    </>
  );
}

export default App;
