import React, {ReactNode} from 'react';
import NavBar from '../navigation/top-navigation/nav-bar';

interface StoreLayoutProps {
    children: ReactNode;
}

const StoreLayout:React.FC<StoreLayoutProps>=({children})=>{
    return(
        <>
            <NavBar/>
            <main>
                {children}
            </main>
        </>
    )
}

export default StoreLayout;