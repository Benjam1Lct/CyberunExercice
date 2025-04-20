import { withJsonFormsControlProps } from '@jsonforms/react';
import '../styles/textFields.css'; // 👈 importer le fichier CSS

const ReadOnlyMultilineText = ({ data, label, description }: any) => {
  return (
    <div className="multiline-container">
      <div className="multiline-label">{label}</div>
      {description && <div className="multiline-description">{description}</div>}
      <div className="multiline-value">{data}</div>
    </div>
  );
};

export default withJsonFormsControlProps(ReadOnlyMultilineText);
