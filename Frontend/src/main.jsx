import { createRoot } from "react-dom/client";
import "./Pages Style/Home.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes";
import { Provider } from "react-redux";
import blogifyStore from "./Redux/Store";
import Notification from "./Components/Notification";

createRoot(document.getElementById("root")).render(
  <Provider store={blogifyStore}>
    <Notification />
    <RouterProvider router={routes}></RouterProvider>
  </Provider>,
);
