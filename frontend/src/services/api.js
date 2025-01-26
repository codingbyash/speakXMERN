const API_URL = 'http://localhost:5000/api/questions';

export const fetchQuestions = async (query = '', page = 1, type = '') => {
  try {
    let url = `${API_URL}/search?query=${query}&page=${page}`;
    if (type) url += `&type=${type}`;  // Include type in the query string

    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch questions');

    const data = await response.json();
    console.log('Data from API:', data);

    return {
      results: data.results,
      total: data.totalResults,
    };
  } catch (error) {
    console.error('Error fetching questions:', error);
    return { results: [], total: 0 };
  }
};
