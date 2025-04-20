import React from 'react';
import { withJsonFormsArrayControlProps } from '@jsonforms/react';

const ReadOnlyEnumArray = ({ data, label, description }: any) => {
  return (
    <div style={{ display: 'flex', marginBottom: '1.5rem' }}>
      <div style={{ flex: 1, fontWeight: 'bold' }}>
        {label}
        {description && (
          <div style={{ fontSize: '0.8em', color: '#777' }}>{description}</div>
        )}
      </div>
      <div style={{ flex: 1, display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {(data || []).map((value: string, index: number) => (
          <span
            key={index}
            style={{
              backgroundColor: '#e0f2ff',
              padding: '0.3rem 0.7rem',
              borderRadius: '999px',
              fontSize: '0.85rem',
              color: 'black'
            }}
          >
            {value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default withJsonFormsArrayControlProps(ReadOnlyEnumArray);
