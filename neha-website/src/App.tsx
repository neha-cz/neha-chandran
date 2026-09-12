import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "./pages/Home";
import Recs from "./pages/Recs";
import Thoughts from "./pages/Thoughts";
import Work from "./pages/Work";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/recs" element={<Recs />} />
        <Route path="/thoughts" element={<Thoughts />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
