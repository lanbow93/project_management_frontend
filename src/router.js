import { createBrowserRouter, createRoutesFromElements, Route,} from "react-router-dom"
import { projectsLoader, projectLoader } from "./loaders"
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"

const router = createBrowserRouter (

    createRoutesFromElements (
    <Route path="" element={<App/>}>
        <Route path="" element={<Index/>} loader={projectsLoader}/>
        <Route path="/project/:id" element={<Show/>} loader={projectLoader}/>
    </Route>
    )
)

export default router
