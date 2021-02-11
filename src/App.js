import React from 'react';
import PropTypes from 'prop-types';

const foodLike = [
  {
    id: 1,
    name: '김치',
    image: 'https://cdn.crowdpic.net/detail-thumb/thumb_d_65390B023BB5FA177242F48877F1D44B.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: '식혜',
    image: 'https://i.ytimg.com/vi/9S-SPfJukwY/maxresdefault.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: '피자',
    image: 'https://cdn.dominos.co.kr/admin/upload/goods/20200311_x8StB1t3.jpg',
    rating: 4,
  },
  {
    id: 4,
    name: '과메기',
    image: 'https://www.kfoodtimes.com/news/photo/202002/7762_12408_346.jpg',
    rating: 4.8,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <figure>
        <img src={picture} alt={name} />
        <figcaption>{name} 맛있겠다</figcaption>
      </figure>
      <span>{rating}/5.0</span>
    </div>
  );
}

function App() {
  return (
    <div>
      {foodLike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
}

export default App;
