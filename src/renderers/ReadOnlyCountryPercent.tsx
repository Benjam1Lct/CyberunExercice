import React from 'react';
import { withJsonFormsArrayControlProps } from '@jsonforms/react';

const ReadOnlyCountryPercent = ({ data, label, description }: any) => {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '0.25rem' }}>
        {label}
      </div>
      {description && (
        <div style={{ textAlign: 'center', fontSize: '0.8em', color: '#777', marginBottom: '1rem' }}>
          {description}
        </div>
      )}
      {(data || []).map((entry: any, index: number) => (
        <div key={index} style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0.5rem 1rem',
          borderBottom: '1px solid #444'
        }}>
          <span style={{ fontWeight: 500 }}>{entry.country}</span>
          <span style={{ fontWeight: 500 }}>{entry.percent} %</span>
        </div>
      ))}
    </div>
  );
};

export default withJsonFormsArrayControlProps(ReadOnlyCountryPercent);
