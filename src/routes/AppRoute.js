import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from "../components/Header";

import { Home , Blog , ContactUs , GalleryList, NotFound } from "../pages"

const AppRoute = () => (
    <BrowserRouter>
        <Header />
            <Switch>
                <Route path="" exact component={Home} />
                <Route path="/gallery" component={GalleryList} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={ContactUs} />
                <Route component={NotFound} />
            </Switch>
    </BrowserRouter>
)

export default AppRoute;