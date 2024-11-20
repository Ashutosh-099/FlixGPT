import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { UserContext } from "./contexts/UserContext";
import { createContextData } from "./utils/helper";
import { routesPath } from "./utils/constants";
import { appStore } from "./store";
import Login from "./components/Login/Login";
import LandingPage from "./components/LandingPage/LandingPage";
import ContentBrowser from "./components/ContentBrowser/ContentBrowser";

function App() {
  const userData = createContextData(undefined);

  const browserRouter = createBrowserRouter(
    [
      {
        path: routesPath.login,
        element: <Login />,
      },
      {
        path: routesPath.browse,
        element: <LandingPage />,
        children: [
          {
            path: routesPath.browse,
            element: <ContentBrowser />,
          },
        ],
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
      <Provider store={appStore}>
        <RouterProvider
          router={browserRouter}
          future={{ v7_startTransition: true }}
        />
      </Provider>
    </UserContext.Provider>
  );
}

export default App;
