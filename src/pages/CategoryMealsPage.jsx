import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const CategoryMealsPage = () => {
    const [category, setCategory] = useState(null);
    useEffect(() => {
        (async () => {
            const categoriesResponse = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const categoriesResponseData = await categoriesResponse.json();

            setCategory(categoriesResponseData.categories);
        })();
    },[]);

    console.log(category);

    return (
        <>
            <Header />
            <div>
                {category ? (
                    <>
                        {category.map((category) => {
                            return (
                                <h3>
                                    {category.strCategory}
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

export default CategoryMealsPage;