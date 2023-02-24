import { createBrowserRouter, createRoutesFromElements, Route,} from "react-router-dom"
import { projectsLoader, projectLoader } from "./loaders"
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import New from "./pages/New"

const router = createBrowserRouter (

    createRoutesFromElements (
    <Route path="" element={<App/>}>
        <Route path="" element={<Index/>} loader={projectsLoader}/>
        <Route path="/project/:id" element={<Show/>} loader={projectLoader}/>
        <Route path="/newproject" element={<New />}  />
    </Route>
    )
)

export default router
