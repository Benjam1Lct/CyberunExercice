// HOC de JSONForms : injecte les props nécessaires pour un contrôle de type array
import { withJsonFormsArrayControlProps } from '@jsonforms/react';

// Import du fichier CSS dédié aux champs de type enum (badges stylés)
import '../styles/enumFields.css';

// Composant de rendu lecture seule pour les enums multiples (champ s01)
// Affiche les éléments sélectionnés sous forme de badges
const ReadOnlyEnumArray = ({ data, label, description }: any) => {
  return (
    <div className="enum-array-container">
      {/* Titre du champ (colonne gauche) */}
      <div className="enum-array-label">
        {label}
        {/* Description optionnelle sous le titre */}
        {description && (
          <div className="enum-array-description">{description}</div>
        )}
      </div>

      {/* Liste des valeurs affichées sous forme de badges (colonne droite) */}
      <div className="enum-array-values">
        {(data || []).map((value: string, index: number) => (
          <span key={index} className="enum-badge">
            {value}
          </span>
        ))}
      </div>
    </div>
  );
};

// HOC qui connecte le composant à JSONForms pour qu'il puisse être utilisé comme renderer
export default withJsonFormsArrayControlProps(ReadOnlyEnumArray);
