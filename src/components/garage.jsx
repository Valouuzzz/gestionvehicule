import Voiture from './voiture';
import Camion from './camion';
import Moto from './moto';
import {useState} from "react";

const Garage = () => {
    const [vehicles, setVehicles] = useState([]);
    const [form, setForm] = useState({ type: 'voiture', marque: '', anneeFabrication: '', couleur: '', nombrePortes: '', capacite: '', cylindree: '' });
            // aide d'internet et ia surtout pour la synthaxe
            //                  |
            //                  v
    const ajouterVehicule = (e) => {
        e.preventDefault();
        const newVehicle = { type: form.type, marque: form.marque, anneeFabrication: form.anneeFabrication, couleur: form.couleur };
        if (form.type === 'voiture') {
            newVehicle.nombrePortes = form.nombrePortes;
        } else if (form.type === 'camion') {
            newVehicle.capacite = form.capacite;
        } else if (form.type === 'moto') {
            newVehicle.cylindree = form.cylindree;
        }
        setVehicles([...vehicles, newVehicle]);
        alert(`${form.type} ajouté au garage`);
        setForm({ type: 'voiture', marque: '', anneeFabrication: '', couleur: '', nombrePortes: '', capacite: '', cylindree: '' });
    };

    return (
        <div className="container mt-4">
            <form onSubmit={ajouterVehicule} className="mb-4">
                <div className="mb-3">
                    <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="form-select">
                        <option value="voiture">Voiture</option>
                        <option value="camion">Camion</option>
                        <option value="moto">Moto</option>
                    </select>
                </div>
                <div className="mb-3">
                    <input type="text" placeholder="Marque" value={form.marque} onChange={(e) => setForm({ ...form, marque: e.target.value })} className="form-control" required />
                </div>
                <div className="mb-3">
                    <input type="text" placeholder="Année de Fabrication" value={form.anneeFabrication} onChange={(e) => setForm({ ...form, anneeFabrication: e.target.value })} className="form-control" required />
                </div>
                <div className="mb-3">
                    <input type="text" placeholder="Couleur" value={form.couleur} onChange={(e) => setForm({ ...form, couleur: e.target.value })} className="form-control" required />
                </div>
                {form.type === 'voiture' && (
                    <div className="mb-3">
                        <input type="text" placeholder="Nombre de Portes" value={form.nombrePortes} onChange={(e) => setForm({ ...form, nombrePortes: e.target.value })} className="form-control" />
                    </div>
                )}
                {form.type === 'camion' && (
                    <div className="mb-3">
                        <input type="text" placeholder="Capacité" value={form.capacite} onChange={(e) => setForm({ ...form, capacite: e.target.value })} className="form-control" />
                    </div>
                )}
                {form.type === 'moto' && (
                    <div className="mb-3">
                        <input type="text" placeholder="Cylindrée" value={form.cylindree} onChange={(e) => setForm({ ...form, cylindree: e.target.value })} className="form-control" />
                    </div>
                )}
                <button type="submit" className="btn btn-success">Ajouter</button>
            </form>
            {vehicles.length === 0 ? (
                <p className="text-muted">Le garage est vide.</p>
            ) : (
                vehicles.map((vehicle, index) => (
                    <div key={index}>
                        {vehicle.type === 'voiture' && <Voiture {...vehicle} />}
                        {vehicle.type === 'camion' && <Camion {...vehicle} />}
                        {vehicle.type === 'moto' && <Moto {...vehicle} />}
                    </div> // synthaxe "..." ??? pas mal de temps perdu
                ))
            )}
        </div>
    );
};

export default Garage;
