import axios from 'axios';

export const apiParser = (route, method, payload) => {
  const BASE_URL = `https://www.reddit.com/r/${route}`;
  
  switch(method) {
    //here you can add other methods you need
    default: 
    return (
      axios.get(BASE_URL , { params: { limit: 4 } })
      .then()
      .catch()
    ) 
  }
};