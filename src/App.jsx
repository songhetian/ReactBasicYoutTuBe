import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReducerPage from "./pages/ReducerPage";
import NotFound from "./pages/NotFound";
import ContextPage from "./pages/ContextPage";
import Home from "./pages/Toolkit/Home";
import List from "./pages/Toolkit/List";
import FetchPage from "./pages/Effect/FetchPage";
import EffectPage from "./pages/Effect/EffectPage";
import EffectInput from "./pages/Effect/EffectInput";
import UserPage from "./pages/UserPage";
import Form from "./pages/HookForm/Form";
import IndexPage from "./pages/ReactQuery/IndexPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      //切换页面不刷新
      refetchOnWindowFocus: false,
      staleTime: 1000,
    },
  },
});

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/reducer",
          element: <ReducerPage />,
        },
        {
          path: "/context",
          element: <ContextPage />,
        },
        {
          path: "/user/:username",
          element: <UserPage />,
        },
        {
          path: "/hook-form",
          element: <Form />,
        },
        {
          path: "/react-query",
          element: (
            <QueryClientProvider client={client}>
              <IndexPage />,
            </QueryClientProvider>
          ),
        },
        {
          path: "/toolkit",
          element: <Home />,
          children: [
            {
              path: "list",
              element: <List />,
            },
          ],
        },
        {
          path: "/effect",
          element: <EffectPage />,
          children: [
            {
              path: "fetch",
              element: <FetchPage title="FetchPage" />,
            },
            {
              path: "input",
              element: <EffectInput title="EffectInput" />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
