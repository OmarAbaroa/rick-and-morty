import { HashRouter, Route, Routes } from "react-router-dom";
import { CharacterPage, HomePage } from "./views";
import { Layout } from "./components";

function App() {
  return (
    <>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/rick-and-morty" element={<HomePage />} />
            <Route
              path="/rick-and-morty/character/:id"
              element={<CharacterPage />}
            />
          </Routes>
        </Layout>
      </HashRouter>
    </>
  );
}

export default App;
