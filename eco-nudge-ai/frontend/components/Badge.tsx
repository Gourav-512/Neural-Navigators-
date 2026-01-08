import React from 'react';

export default function Badge({ children }: { children: React.ReactNode }) {
  return <span className="px-2 py-1 bg-green-100 rounded">{children}</span>;
}
