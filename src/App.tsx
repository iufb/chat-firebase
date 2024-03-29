import { Navigate, Route, Routes } from "react-router-dom";
import { Chatbox, ConversationSidebar } from "./components";
import { Chat } from "./components/Chatbox/Chat/Chat";
import VideoCall from "./components/VideoCall/VideoCall";
import { useIncomingCall } from "./helpers/hooks/useIncomingCall";
import { useIsMobile } from "./helpers/hooks/useIsMobile";
import { ProtectedRoute } from "./helpers/ProtectedRoute";
import {
  ConversationLayout,
  MobileConversationLayout,
  PageLayout,
} from "./layout";
import { MobileLayout } from "./layout/MobileLayout/MobileLayout";
import {
  ConversationPage,
  HomePage,
  LoginPage,
  RegisterPage,
  UpdateUserPage,
} from "./pages";
import { useStartCall } from "./zustand/videocall/startCall";

function App() {
  const { isMobile } = useIsMobile();
  const { startCall } = useStartCall((state) => ({
    startCall: state.startCall,
  }));
  useIncomingCall();
  return (
    <>
      {startCall && <VideoCall />}
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/update" element={<UpdateUserPage />} />
        {!isMobile ? (
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
        ) : (
          <>
            <Route path="/" element={<MobileLayout />}>
              <Route path="home" element={<HomePage />} />
              <Route
                path="conversations"
                element={
                  <ProtectedRoute>
                    <ConversationSidebar />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route element={<MobileConversationLayout />}>
              <Route
                path="/conversations/:id"
                element={
                  <ProtectedRoute>
                    <Chat />
                  </ProtectedRoute>
                }
              />
            </Route>
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
