import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Loading from "@molecules/Loading";

const Home = lazy(() => import("@pages/Home"));
const DashPage = lazy(() => import("@pages/DashPage"));
const Product = lazy(() => import("@pages/Product"));

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<DashPage />}>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
