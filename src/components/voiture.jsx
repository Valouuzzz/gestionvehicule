import Vehicle from './vehicule';

const Voiture = ({ marque, anneeFabrication, couleur, nombrePortes }) => {
    // pas reussi a enlever l'erreur

    const afficherDetails = () => {
        alert(`Voiture: ${marque}, Année: ${anneeFabrication}, Couleur: ${couleur}, Nombre de portes: ${nombrePortes}`);
    };

    const klaxonner = () => {
        alert('Bip Bip!');
    };

    return (
        <Vehicle marque={marque} anneeFabrication={anneeFabrication} couleur={couleur} afficherDetails={afficherDetails} klaxonner={klaxonner}/>
    );
};

export default Voiture;
