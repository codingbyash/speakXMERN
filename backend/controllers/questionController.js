import Question from '../models/Question.js';

const searchQuestions = async (req, res) => {
  try {
    const { query = '', page = 1, limit = 10, type = '' } = req.query;

    if (!query) {
      return res.status(400).json({ message: 'Search query is required' });
    }

    const skip = (page - 1) * limit;
    const filter = { title: { $regex: query, $options: 'i' } };

    if (type) {
      const validCategories = ['ANAGRAM', 'MCQ', 'SENTENCE'];
      if (!validCategories.includes(type)) {
        return res.status(400).json({ message: `Invalid category type: ${type}` });
      }
      filter.category = type;
    }

    const [results, totalResults] = await Promise.all([
      Question.find(filter).skip(skip).limit(Number(limit)),
      Question.countDocuments(filter),
    ]);

    res.status(200).json({
      results,
      totalResults,
      currentPage: Number(page),
      totalPages: Math.ceil(totalResults / limit),
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export { searchQuestions };
