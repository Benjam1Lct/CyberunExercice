import './App.css'
import { JsonForms } from '@jsonforms/react';
import { vanillaRenderers, vanillaCells } from '@jsonforms/vanilla-renderers';

import { rankWith, isStringControl, UISchemaElement, JsonSchema, isControl } from '@jsonforms/core';
import ReadOnlyText from './renderers/ReadOnlyText';
import ReadOnlyEnumArray from './renderers/ReadOnlyEnumArray';
import ReadOnlyCountryPercent from './renderers/ReadOnlyCountryPercent';
import ReadOnlyMultilineText from './renderers/ReadOnlyMultilineText';


// Importation des fichiers JSON
import schema from './json/schema.json';
import uischema from './json/uischema.json';
import data from './json/data.json';

function App() {

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

  const isS01Control = (uischema: any): boolean => {
    return (
      uischema.type === 'Control' &&
      'scope' in uischema &&
      uischema.scope === '#/properties/item/properties/s01'
    );
  };

  const isI01Control = (uischema: any): boolean => {
    return (
      uischema.type === 'Control' &&
      'scope' in uischema &&
      uischema.scope === '#/properties/item/properties/i01'
    );
  };


  const customRenderers = [
    ...vanillaRenderers,
    {
      tester: rankWith(6, isI01Control),
      renderer: ReadOnlyCountryPercent
    },
    {
      tester: rankWith(5, isS01Control),
      renderer: ReadOnlyEnumArray
    },
    {
      tester: rankWith(4, isMultilineText), // 🆕 multiligne détecté
      renderer: ReadOnlyMultilineText
    },
    {
      tester: rankWith(3, isStringControl),
      renderer: ReadOnlyText
    }
  ];
  

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
