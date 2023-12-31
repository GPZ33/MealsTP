import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
const MealCard = ({ meal }) => {
  return (
    <Card sx={{ maxWidth: 345 }} className='meals'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={meal.strMealThumb}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {meal.strMeal}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {<Link to={`/details/${meal.idMeal}`}>Voir la recette</Link>}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default MealCard