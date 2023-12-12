import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MealCard from "../components/MealCard";
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Home() {
    const [meals, setMeals] = useState(null);
    useEffect(() => {
        (async () => {
            const mealsReponse = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
            const mealsReponseData = await mealsReponse.json();

            setMeals(mealsReponseData);
        })();
    },[]);
    console.log(meals);
    return (
        <>
            <Header />
            <div>
                {meals ? (
                    <>
                        {meals.meals.map((meal) => {
                            return (
                                <>
                                <MealCard meal={meal} />
                                </>
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

export default Home;