import {Routes, Route} from "react-router-dom";
import {ExoticComponent, FC, lazy, Suspense} from "react"

const HomeLayoutOnLazy:ExoticComponent = lazy(() => import("./layout/Home"))

const Router:FC = () => {
    return (
        <Routes>
            <Route index element={<SuspenseComponent Component={HomeLayoutOnLazy}/>}/>
        </Routes>
    )
}

const SuspenseComponent:FC<{Component:ExoticComponent}> = ({Component}) => {
    return (
        <Suspense fallback={"<h3>loading...</h3>"}>
            <Component/>
        </Suspense>
    )
}

export default Router