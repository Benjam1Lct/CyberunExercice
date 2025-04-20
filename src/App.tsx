// Importation du style global
import './App.css'

// Composant principal de JSONForms
import { JsonForms } from '@jsonforms/react';

// Renderers et cells par défaut (version vanilla)
import { vanillaRenderers, vanillaCells } from '@jsonforms/vanilla-renderers';

// Outils pour définir les conditions d'application de renderers personnalisés
import { rankWith, isStringControl, UISchemaElement, JsonSchema, isControl } from '@jsonforms/core';

// Renderers personnalisés pour affichage en lecture seule
import ReadOnlyText from './renderers/ReadOnlyText';
import ReadOnlyEnumArray from './renderers/ReadOnlyEnumArray';
import ReadOnlyCountryPercent from './renderers/ReadOnlyCountryPercent';
import ReadOnlyMultilineText from './renderers/ReadOnlyMultilineText';


// Chargement des fichiers JSON définissant les schémas et les données
import schema from './json/schema.json';
import uischema from './json/uischema.json';
import data from './json/data.json';

function App() {

  // Tester personnalisé : détecte un champ texte multiligne via options.multi === true
  const isMultilineText = (
    uischema: UISchemaElement,
    _schema: JsonSchema
  ): boolean => {
    return (
      isControl(uischema) &&
      typeof uischema === 'object' &&
      'options' in uischema &&
      (uischema as any).options?.multi === true
    );
  };

  // Tester spécifique pour le champ s01 (enum multiple)
  const isS01Control = (uischema: any): boolean => {
    return (
      uischema.type === 'Control' &&
      'scope' in uischema &&
      uischema.scope === '#/properties/item/properties/s01'
    );
  };

  // Tester spécifique pour le champ i01 (pays + pourcentage)
  const isI01Control = (uischema: any): boolean => {
    return (
      uischema.type === 'Control' &&
      'scope' in uischema &&
      uischema.scope === '#/properties/item/properties/i01'
    );
  };

  // Liste des renderers personnalisés (classés par priorité avec rank)
  const customRenderers = [
    ...vanillaRenderers, // Renderers vanilla par défaut (fallback)
    {
      tester: rankWith(6, isI01Control),
      renderer: ReadOnlyCountryPercent
    },
    {
      tester: rankWith(5, isS01Control),
      renderer: ReadOnlyEnumArray
    },
    {
      tester: rankWith(4, isMultilineText),
      renderer: ReadOnlyMultilineText
    },
    {
      tester: rankWith(3, isStringControl),
      renderer: ReadOnlyText
    }
  ];
  
  // Rendu principal de l'application
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Lecture seule - JSONForms</h1>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={customRenderers}
        cells={vanillaCells}
      />
    </div>
  );
}

export default App
