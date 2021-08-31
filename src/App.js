import AppContextProvider from "./provider/AppContextProvider";
import AppRoute from "./routes/AppRoute";

const App = () => {
    return (
        <AppContextProvider>
            <AppRoute />
        </AppContextProvider>
    )
}

export default App;