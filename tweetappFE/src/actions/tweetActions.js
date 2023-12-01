import axios from 'axios';

export const fetchTweets = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:3000/tweets');
    dispatch({ type: 'FETCH_TWEETS_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'FETCH_TWEETS_FAILURE', payload: error });
  }
};

export const filterTweets = (searchTerm) => {
  return { type: 'FILTER_TWEETS', payload: searchTerm };
};
