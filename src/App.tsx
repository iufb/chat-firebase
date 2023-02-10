import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ProtectedRoute } from "./helpers/ProtectedRoute";
import { PageLayout } from "./layout";
import { ConversationPage, HomePage, LoginPage, RegisterPage } from "./pages";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<PageLayout />}>
          <Route path="home" element={<HomePage />} />
          <Route
            path="conversations"
            element={
              <ProtectedRoute>
                <ConversationPage />
              </ProtectedRoute>
            }
          />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
