import { PropsWithChildren } from 'react';

function ContentComponent({ children }: PropsWithChildren) {
  return (
    <div style={{ width: '100%', maxWidth: '1140px', margin: '0 auto' }}>
      {children}
    </div>
  );
}

export default ContentComponent;
