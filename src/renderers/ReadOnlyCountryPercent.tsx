import { withJsonFormsArrayControlProps } from '@jsonforms/react';
import '../styles/table.css'; // 👈 importer le CSS

const ReadOnlyCountryPercent = ({ data, label, description }: any) => {
  return (
    <div className="country-percent-container">
      <div className="country-percent-title">{label}</div>
      {description && <div className="country-percent-description">{description}</div>}
      {(data || []).map((entry: any, index: number) => (
        <div key={index} className="country-percent-entry">
          <span className="country-name">{entry.country}</span>
          <span className="country-percent">{entry.percent} %</span>
        </div>
      ))}
    </div>
  );
};

export default withJsonFormsArrayControlProps(ReadOnlyCountryPercent);
