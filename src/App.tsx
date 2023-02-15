import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Chatbox } from "./components";
import { ProtectedRoute } from "./helpers/ProtectedRoute";
import ScrollObserver from "./helpers/scroll-observer";
import { ConversationLayout, PageLayout } from "./layout";
import {
  ConversationPage,
  HomePage,
  LoginPage,
  RegisterPage,
  UpdateUserPage,
} from "./pages";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/update" element={<UpdateUserPage />} />
        <Route path="/" element={<PageLayout />}>
          <Route path="home" element={<HomePage />} />
          <Route element={<ConversationLayout />}>
            <Route
              path="conversations"
              element={
                <ProtectedRoute>
                  <ConversationPage />
                </ProtectedRoute>
              }
            >
              <Route path=":id" element={<Chatbox />} />
            </Route>
          </Route>
        </Route>
      </>
    )
  );
  return (
    <ScrollObserver>
      <RouterProvider router={router} />
    </ScrollObserver>
  );
}

export default App;
