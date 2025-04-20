import { withJsonFormsControlProps } from '@jsonforms/react';
import '../styles/textFields.css'; // 👈 importer les styles

const ReadOnlyText = ({ data, label, description }: any) => {
  return (
    <div className="readonly-text-container">
      <div className="readonly-text-label">
        {label}
        {description && (
          <div className="readonly-text-description">{description}</div>
        )}
      </div>
      <div className="readonly-text-value">{data}</div>
    </div>
  );
};

export default withJsonFormsControlProps(ReadOnlyText);
