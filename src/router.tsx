import { createBrowserRouter, redirect } from "react-router-dom";
import { TracksApiProvider } from "./hooks/tracks-api-context";
import { tracksApi } from "./services/tracks-api";
import App from "./App";
import { TaskList } from "./components/task-list";
import { Layout } from "./components/layout";
import { TrackModalProvider } from "./tracks-modal";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <TracksApiProvider value={tracksApi}>
        <TrackModalProvider>
          <Layout />
        </TrackModalProvider>
      </TracksApiProvider>
    ),
    children: [
      {
        index: true,
        loader: () => redirect("/tracks"),
      },
      {
        path: "/tracks",
        element: <App />,
      },
      {
        path: "/tasks",
        element: <TaskList />,
      },
    ],
  },
]);
