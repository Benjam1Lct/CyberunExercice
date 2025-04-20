import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';

const ReadOnlyMultilineText = ({ data, label, description }: any) => {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ fontWeight: 'bold', marginBottom: '0.2rem' }}>{label}</div>
      {description && (
        <div style={{ fontSize: '0.8em', color: '#777', marginBottom: '0.8rem' }}>
          {description}
        </div>
      )}
      <div
        style={{
          padding: '1rem',
          border: '1px solid #444',
          borderRadius: '8px',
          backgroundColor: '#1e1e1e',
          whiteSpace: 'pre-wrap'
        }}
      >
        {data}
      </div>
    </div>
  );
};

export default withJsonFormsControlProps(ReadOnlyMultilineText);
