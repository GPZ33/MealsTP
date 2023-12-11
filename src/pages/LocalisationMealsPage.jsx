import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LocalisationMealsPage = () => {
    const [localisation, setLocalisation] = useState(null);
    useEffect(() => {
        (async () => {
            const localisationReponse = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
            const localisationReponseData = (await localisationReponse.json());

            setLocalisation(localisationReponseData.meals);
        })();
    },[])

    console.log(localisation);

    return (
        <>
            <Header />
            <div>
                {localisation ? (
                    <>
                        {localisation.map((localisation) => {
                            return (
                                <h3>
                                    {localisation.strArea}
                                </h3>
                            );
                        })}
                    </>
                ) : (

                    <>
                        <Box sx={{ display: 'flex' }}>
                            Chargement...
                            <CircularProgress />
                        </Box>
                    </>
                )}
            </div>
            <Footer />
        </>

    );
}

export default LocalisationMealsPage;