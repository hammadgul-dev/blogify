import {createRoot} from "react-dom/client"
import "./PagesStyle/Home.css"
import {RouterProvider} from "react-router-dom"
import routes from "./Routes"
import {Provider} from "react-redux"
import blogifyStore from "./Redux/Store"
import Notification from "./Components/Notification"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {useSelector} from "react-redux"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
    },
  },
})

function AppWrapper() {
  let mode = useSelector((state) => state.theme.mode)
  return (
    <div data-theme={mode}>
      <Notification />
      <RouterProvider router={routes} />
    </div>
  )
}

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={blogifyStore}>
      <AppWrapper />
    </Provider>
  </QueryClientProvider>,
)
