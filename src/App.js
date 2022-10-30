import { ContextProvider } from './context';
import Routes from './Routes';
const App = () => (
    <ContextProvider>
        <Routes />      
    </ContextProvider>
    
);

export default App;
