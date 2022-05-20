import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";

import RegistroContainer from "./containers/registroContainer";

function App() {

  return (
    <HashRouter>
      <Routes>
          <Route path="/" element={<RegistroContainer/>} />
        </Routes>
    </HashRouter>
  );
}

export default App;
