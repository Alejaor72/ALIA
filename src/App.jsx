import { useLocation } from 'react-router-dom';
import './App.css';
import { AppRouter } from './Router/AppRouter';


function App() {
    const location = useLocation();
    console.log(location);
    return (
        <AppRouter/>
    );
}

export default App;