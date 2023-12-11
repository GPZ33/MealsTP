import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealDetailsPage = () => {
    const { id } = useParams();

    const [meal, setMeal] = useState(null);

    useEffect(() => {
        (async () => {
            const mealResponse = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
            const mealResponseData = await mealResponse.json();
            setMeal(mealResponseData.meals[0]);
        })();
    }, []);
    console.log(meal);
    return (
        <div>
            {meal ? (
                <article>
                    <h2>{meal.strMeal}</h2>
                </article>
            ) : (
                <p>En cours de chargement</p>
            )}
        </div>
    );
}

export default MealDetailsPage;