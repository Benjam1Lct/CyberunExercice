import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';

const ReadOnlyText = ({ data, label, description }: any) => {
  return (
    <div style={{ display: 'flex', marginBottom: '1rem' }}>
      <div style={{ flex: 1, fontWeight: 'bold' }}>
        {label}
        {description && (
          <div style={{ fontSize: '0.8em', color: '#777' }}>{description}</div>
        )}
      </div>
      <div style={{ flex: 1 }}>{data}</div>
    </div>
  );
};

export default withJsonFormsControlProps(ReadOnlyText);
