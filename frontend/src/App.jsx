import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from 'react-router-dom';
import { Home } from './pages/home';
import Campus from './pages/campus';
import { PAGE_PATHS } from './constants/PagePaths';
import { AppContextProvider } from './contexts/AppContext';
import { PageNotFound } from './pages/notfound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to={PAGE_PATHS.INSIGHTS} />,
    },
    {
        path: PAGE_PATHS.INSIGHTS,
        element: <Home />,
    },
    {
        path: PAGE_PATHS.CAMPUS_PLACEMENT_ANALYZER,
        element: <Campus />,
    },
    {
        path: '*',
        element: <PageNotFound />,
    },
]);
function App() {
    return (
        <AppContextProvider>
            <RouterProvider router={router} />
        </AppContextProvider>
    );
}

export default App;
