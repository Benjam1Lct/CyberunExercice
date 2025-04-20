// HOC de JSONForms : injecte automatiquement les props d'un champ de contrôle
import { withJsonFormsControlProps } from '@jsonforms/react';

// Import du style CSS dédié aux champs texte (ici multiligne)
import '../styles/textFields.css'; 

// Composant de rendu lecture seule pour les champs texte multiligne (ex: a09)
// Affiche le texte sur toute la largeur, sous le titre
const ReadOnlyMultilineText = ({ data, label, description }: any) => {
  return (
    <div className="multiline-container">
      {/* Titre de la question */}
      <div className="multiline-label">{label}</div>

      {/* Description (optionnelle), en plus petit et gris */}
      {description && <div className="multiline-description">{description}</div>}

      {/* Texte affiché en bloc sur toute la largeur */}
      <div className="multiline-value">{data}</div>
    </div>
  );
};

// HOC qui connecte le composant à JSONForms pour l'utiliser comme renderer
export default withJsonFormsControlProps(ReadOnlyMultilineText);
