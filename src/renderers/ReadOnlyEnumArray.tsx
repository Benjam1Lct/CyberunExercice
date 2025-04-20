import { withJsonFormsArrayControlProps } from '@jsonforms/react';
import '../styles/enumFields.css'; // 👈 importer le style

const ReadOnlyEnumArray = ({ data, label, description }: any) => {
  return (
    <div className="enum-array-container">
      <div className="enum-array-label">
        {label}
        {description && (
          <div className="enum-array-description">{description}</div>
        )}
      </div>
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

export default withJsonFormsArrayControlProps(ReadOnlyEnumArray);
