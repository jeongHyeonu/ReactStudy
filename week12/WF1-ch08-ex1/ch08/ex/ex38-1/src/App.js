/**
 * ch08/ex/ex38-1
 * ./src/App.js
 */

import { AxiosGet } from "./components/GetData";

const App = () => (
  <>
    <p>AxiosGet():</p>
    <AxiosGet login='sp-mcslab' />
  </>    
);

export default App;