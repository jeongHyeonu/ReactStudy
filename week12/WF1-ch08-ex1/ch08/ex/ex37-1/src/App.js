/**
 * ch08/ex/ex37-1
 * ./src/App.js
 */

import { XHR } from "./components/GetData";

const App = () => (
  <>
    <p>XHR():</p>
    <XHR login='sp-mcslab' />
  </>    
);

export default App;