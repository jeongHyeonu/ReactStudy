/**
 * ch08/ex/ex36-2
 * ./src/App.js
 */

import { FetchAsync } from "./components/GetData";

const App = () => (
  <>
    <p>FetchAsync():</p>
    <FetchAsync login='sp-mcslab' />
  </>    
);

export default App;