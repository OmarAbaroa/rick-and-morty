import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CharacterPage, HomePage } from "./views";
import { Layout } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/character/:id" element={<CharacterPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
