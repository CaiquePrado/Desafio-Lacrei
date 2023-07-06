import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Professional } from "./pages/Professional";
import { User } from "./pages/User";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/professional" element={<Professional />} />
        </Route>
      </Routes>
    </Router>
  );
};
