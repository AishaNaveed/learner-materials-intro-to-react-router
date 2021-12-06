import React, { useState, useContext, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router';
import generateMisdemeanours from './generate_misdemeanours';

export const MisdemeanoursContext = React.createContext();

const MainLayout = () => {

    const [misdemeanours, setMisdemeanours] = useState([]);

    const getInfo = async () => {
        const apiResponse = await generateMisdemeanours();
        setMisdemeanours(apiResponse);
    };

    useEffect(() => {
        getInfo();
    }, []);

    return (
        <>
            <MisdemeanoursContext.Provider value={{ misdemeanours }}>
                <Header />
                <Outlet />
                <Footer />
            </MisdemeanoursContext.Provider>

        </>
    );
}

export default MainLayout;