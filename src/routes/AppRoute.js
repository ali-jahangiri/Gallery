import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";

import { Home , Blog , ContactUs , GalleryList, NotFound, About, SingleBlog, Events, SingleEvent, Purchase, ProductsDirectory, Product, Exhibitions, SingleExhibition, Archive, SingleArchive } from "../pages"

const AppRoute = () => (
    <BrowserRouter>
        <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/gallery" component={GalleryList} />
                <Route path="/publication/:id" component={SingleBlog} />
                <Route path="/publication" component={Blog} />
                <Route path="/purchase" component={Purchase} />
                <Route path="/products/:categoryId" component={ProductsDirectory} />
                <Route path="/product/:id" component={Product} />
                <Route path="/events/:id" component={SingleEvent} />
                <Route path="/events" component={Events} />
                <Route path="/exhibitions" component={Exhibitions} />
                <Route path="/exhibition/:id" component={SingleExhibition} />
                <Route path="/archive/:id" component={SingleArchive} />
                <Route path="/archive" component={Archive} />
                <Route path="/contact" component={ContactUs} />
                <Route path="/about" component={About} />
                <Route component={NotFound} />
            </Switch>
    </BrowserRouter>
)

export default AppRoute;