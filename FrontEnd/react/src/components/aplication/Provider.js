import {createContext,useState} from 'react';



export default ({ children })=>{
    const [stateProvider,setStateProvider] = useState({});
    return (            
            <AppContext.Provider value={[stateProvider,setStateProvider]}>
                {children}
            </AppContext.Provider>  
    );
}

export const AppContext = createContext();
