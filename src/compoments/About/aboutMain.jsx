import "./aboutMain.css";
import Dropdown from "../Dropdown/dropdown";

function AboutMain() {
  return (
    <section className="section_dropdown section_dropdown_about">
      <Dropdown
        title="Fiabilité"
        contents=" Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les
        informations sont régulièrement vérifiées par nos équipes."
      />
      <Dropdown
        title="Respect"
        contents="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <Dropdown
        title="Service"
        contents=" Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez
          la moindre question."
      />
      <Dropdown
        title="Sécurité"
        contents=" La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      />
    </section>
  );
}

export default AboutMain;