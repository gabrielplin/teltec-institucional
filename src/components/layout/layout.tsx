import { PropsWithChildren } from 'react';
import { HeaderTag } from '../header';
import { FooterTag } from '../footer';

function LayoutComponent({ children }: PropsWithChildren) {
  return (
    <>
      <HeaderTag />
      <div style={{ paddingTop: '100px' }}>{children}</div>
      <FooterTag />
    </>
  );
}

export default LayoutComponent;
