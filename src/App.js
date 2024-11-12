import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import Login from "./components/Login/Login";
import LandingPage from "./components/LandingPage/LandingPage";
import { createContextData } from "./utils/helper";

function App() {
  const userData = createContextData(undefined);

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
    <UserContext.Provider value={userData}>
      <RouterProvider
        router={browserRouter}
        future={{ v7_startTransition: true }}
      />
    </UserContext.Provider>
  );
}

export default App;
