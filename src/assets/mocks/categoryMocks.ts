import fastFoodIcon from '../../assets/images/fastFood.svg';
import veganIcon from '../../assets/images/vegan.svg';
import sushiIcon from '../../assets/images/sushi.svg';
import pizzaIcon from '../../assets/images/pizza.svg';
import dessertIcon from '../../assets/images/dessert.svg';
import breakfastIcon from '../../assets/images/breakfast.svg';
import karaokeIcon from '../../assets/images/karaoke.svg';
import hookahIcon from '../../assets/images/hookah.svg';
import alcoholIcon from '../../assets/images/alcohol.svg';
import restaurantIcon from '../../assets/images/restaurant.svg';
import europeanIcon from '../../assets/images/european.svg';
import terraceIcon from '../../assets/images/terrace.svg';
import boardGamesIcon from '../../assets/images/boardGames.svg';
import videoGamesIcon from '../../assets/images/videoGames.svg';
import withAnimalsIcon from '../../assets/images/withAnimals.svg';
import inclusivityIcon from '../../assets/images/inclusivity.svg';
import openIcon from '../../assets/images/open.svg';
import withChildrenIcon from '../../assets/images/withChildren.svg';

export interface Category {
    id: string;
    name: string;
    image: string;
}
  
export const categoryMocks: Category[] = [
    { id: '1', name: 'Fastfood', image: fastFoodIcon },
    { id: '2', name: 'Vegan', image: veganIcon },
    { id: '3', name: 'Sushi', image: sushiIcon },
    { id: '4', name: 'Pizza', image: pizzaIcon },
    { id: '5', name: 'Desserts', image: dessertIcon },
    { id: '6', name: 'Breakfast', image: breakfastIcon },
    { id: '7', name: 'Karaoke', image: karaokeIcon },
    { id: '8', name: 'Hookah', image: hookahIcon },
    { id: '9', name: 'Alcohol', image: alcoholIcon },
    { id: '10', name: 'Restaurant', image: restaurantIcon },
    { id: '11', name: 'European', image: europeanIcon },
    { id: '12', name: 'Terrace', image: terraceIcon },
    { id: '13', name: 'Board games', image: boardGamesIcon },
    { id: '14', name: 'Video games', image: videoGamesIcon },
    { id: '15', name: 'With animals', image: withAnimalsIcon },
    { id: '16', name: 'Inclusivity', image: inclusivityIcon },
    { id: '17', name: 'Open', image: openIcon },
    { id: '18', name: 'With children', image: withChildrenIcon },
];