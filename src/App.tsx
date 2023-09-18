import { HashRouter, Route, Routes } from "react-router-dom";
import { CharacterPage, HomePage } from "./views";
import { Layout } from "./components";

function App() {
  return (
    <>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/character/:id" element={<CharacterPage />} />
          </Routes>
        </Layout>
      </HashRouter>
    </>
  );
}

export default App;
