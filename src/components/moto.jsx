import Vehicle from './vehicule';

const Moto = ({ marque, anneeFabrication, couleur, cylindree }) => {

    // pas reussi a enlever l'erreur

    const afficherDetails = () => {
        alert(`Moto: ${marque}, Année: ${anneeFabrication}, Couleur: ${couleur}, Cylindrée: ${cylindree} cc`);
    };

    const klaxonner = () => {
        alert('Vroum Vroum'); // pas vraiment le bruit d'un klaxon j'admet..
    };

    return (
        <Vehicle marque={marque} anneeFabrication={anneeFabrication} couleur={couleur} afficherDetails={afficherDetails} klaxonner={klaxonner}/>
    );
};

export default Moto;
