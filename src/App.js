import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase.config";
import { UserContext } from "./contexts/UserContext";
import Login from "./components/Login/Login";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });
  }, []);

  const browserRouter = createBrowserRouter(
    [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <LandingPage />,
      },
    ],
    {
      future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      },
    }
  );

  return (
    <UserContext.Provider value={[user, setUser]}>
      <RouterProvider
        router={browserRouter}
        future={{ v7_startTransition: true }}
      />
    </UserContext.Provider>
  );
}

export default App;
