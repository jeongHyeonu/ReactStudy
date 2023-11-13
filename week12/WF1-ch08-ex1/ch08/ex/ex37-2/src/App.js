/**
 * ch08/ex/ex37-2
 * ./src/App.js
 */

import { XHRPromise } from "./components/GetData";

const App = () => (
  <>
    <p>XHRPromise():</p>
    <XHRPromise login='sp-mcslab' />
  </>    
);

export default App;