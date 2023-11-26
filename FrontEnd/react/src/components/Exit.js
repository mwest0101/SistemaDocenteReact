import React from 'react';
import { useContext } from 'react';
import { AppContext } from './aplication/Provider';
import { useHistory } from 'react-router-dom';

//const StoreContext = createContext();



const Exit = () => {
    const history = useHistory();
    const [, setState] = useContext(AppContext);
    setState({ user: null });
    history.push("/");

    return (
        <>
            Cerrando Sesion
        </>
    );
};

export default Exit;

