import Garage from './components/garage';

const App = () => {
    return (
        <div className="app container mt-5">
            <h1 className="text-center text-primary mb-4">Gestion de Véhicules</h1>
            <Garage />
        </div>
    );
};

export default App;
