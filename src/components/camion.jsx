import Vehicle from './vehicule';
import klaxonSound from '../assets/klaxoncamion.mp3';

const Camion = ({ marque, anneeFabrication, couleur, capacite }) => {

                // pas reussi a enlever l'erreur

    const afficherDetails = () => {
        alert(`Camion: ${marque}, Année: ${anneeFabrication}, Couleur: ${couleur}, Capacité: ${capacite} tonnes`);

    };

    const klaxonner = () => {
        const audio = new Audio(klaxonSound); //surprise
        audio.play();
    };

    return (
        <Vehicle marque={marque} anneeFabrication={anneeFabrication} couleur={couleur} afficherDetails={afficherDetails} klaxonner={klaxonner}/>
    );
};

export default Camion;
