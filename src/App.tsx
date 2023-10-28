import React from 'react';
import AddComponent from './views/components/add-products';
import { GlobalStyle } from './views/components/shared/global-style';
import StoreLayout from './views/components/layout/store-layout';

function App() {
  return (
    <>
      <GlobalStyle />
      <StoreLayout>
         <AddComponent />
      </StoreLayout>      
    </>
  );
}

export default App;
