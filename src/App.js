import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "./components/pages/Layout";

const RecepieList = lazy(() => import("./components/recepieList/RecepieList"));
const RecepieDetailsPage = lazy(() =>
  import("./components/pages/RecepieDetailsPage")
);

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<RecepieList />} />
          <Route path="/:recepieId" element={<RecepieDetailsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
