import AppContextProvider from "./provider/AppContextProvider";
import InitialProvider from "./provider/InitialProvider";
import AppRoute from "./routes/AppRoute";

const App = () => {
    return (
        <AppContextProvider>
            <InitialProvider>
                <AppRoute />
            </InitialProvider>
        </AppContextProvider>
    )
}

export default App;