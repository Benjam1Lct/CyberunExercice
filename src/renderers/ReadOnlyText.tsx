// HOC de JSONForms : injecte automatiquement les props nécessaires à un champ de contrôle
import { withJsonFormsControlProps } from '@jsonforms/react';

// Import du style CSS dédié aux champs texte simples
import '../styles/textFields.css'; 

// Composant de rendu lecture seule pour les champs texte (monoligne)
// Affiche la question à gauche et la réponse à droite
const ReadOnlyText = ({ data, label, description }: any) => {
  return (
    <div className="readonly-text-container">
      {/* Colonne gauche : titre et description */}
      <div className="readonly-text-label">
        {label}
        {description && (
          <div className="readonly-text-description">{description}</div>
        )}
      </div>

      {/* Colonne droite : valeur affichée */}
      <div className="readonly-text-value">{data}</div>
    </div>
  );
};

// HOC qui connecte le composant à JSONForms pour le rendre actif dans le système 
export default withJsonFormsControlProps(ReadOnlyText);
