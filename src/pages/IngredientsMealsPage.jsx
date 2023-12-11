import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const IngredientMealsPage = () => {
    const [ingredient, setIngredient] = useState(null);
    useEffect(() => {
        (async () => {
            const ingredientReponse = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
            setIngredient(await ingredientReponse.json());
        })();
    }, [])

    console.log(ingredient);

    return (
        <>
            <Header />
            <div>
                {ingredient ? (
                    <>
                        {ingredient.meals.map((ingredient) => {
                            return (
                                <div>
                                    <h3>
                                        {ingredient.strIngredient}
                                    </h3>
                                    <p>
                                        {ingredient.strDescription}
                                    </p>
                                </div>
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

export default IngredientMealsPage;