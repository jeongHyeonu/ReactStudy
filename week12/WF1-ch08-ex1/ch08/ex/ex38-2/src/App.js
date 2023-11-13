/**
 * ch08/ex/ex38-2
 * ./src/App.js
 */

import { AxiosGetAsync } from "./components/GetData";

const App = () => (
  <>
    <p>AxiosGetAsync():</p>
    <AxiosGetAsync login='sp-mcslab' />
  </>    
);

export default App;