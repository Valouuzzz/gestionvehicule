const Vehicle = ({ marque, anneeFabrication, couleur, afficherDetails, klaxonner }) => {
    //pas reussi a enlever l'erreur

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h2 className="card-title">{marque}</h2>
                <p className="card-text">Année : {anneeFabrication}</p>
                <p className="card-text">Couleur : {couleur}</p>
                <button onClick={afficherDetails} className="btn btn-primary me-2">Afficher Détails</button>
                <button onClick={klaxonner} className="btn btn-secondary">Klaxonner</button>
            </div>
        </div>
    );
};

export default Vehicle;
