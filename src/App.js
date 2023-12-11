import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import MealsPage from "./pages/MealsPage";
import CategoryMealsPage from "./pages/CategoryMealsPage";
import LocalisationMealsPage from "./pages/LocalisationMealsPage";
import IngredientMealsPage from "./pages/IngredientsMealsPage";
import MealDetailsPage from "./pages/MealDetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meals" element={<MealsPage />} />
        <Route path="/category" element={<CategoryMealsPage />} />
        <Route path="/localisation" element={<LocalisationMealsPage />} />
        <Route path="/ingredient" element={<IngredientMealsPage />} />
        <Route path="/details/:id" element={<MealDetailsPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
