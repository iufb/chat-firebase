import { Route, Routes } from "react-router-dom";
import { Chatbox } from "./components";
import { ProtectedRoute } from "./helpers/ProtectedRoute";
import { ConversationLayout, PageLayout } from "./layout";
import {
  ConversationPage,
  HomePage,
  LoginPage,
  RegisterPage,
  UpdateUserPage,
} from "./pages";

function App() {
  return (
    <Routes>
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
    </Routes>
  );
}

export default App;
