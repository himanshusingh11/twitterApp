const initialState = {
    tweets: [],
    filteredTweets: [],
    loading: true,
    error: null,
  };
  
  const tweetReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TWEETS_SUCCESS':
        return {
          ...state,
          tweets: action.payload,
          filteredTweets: action.payload,
          loading: false,
        };
      case 'FETCH_TWEETS_FAILURE':
        return { ...state, error: action.payload, loading: false };
      case 'FILTER_TWEETS':
        const searchTerm = action.payload.toLowerCase();
        const filteredTweets = state.tweets.filter(
          (tweet) =>
            tweet.title.toLowerCase().includes(searchTerm)
        );
        return { ...state, filteredTweets };
      default:
        return state;
    }
  };
  
  export default tweetReducer;
  