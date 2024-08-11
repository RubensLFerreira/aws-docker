const axios = require('axios');
const { validityQuery } = require('./validate/validityQuery');

const CustomError = require('../helpers/CustomError');

exports.articleService = async (queries) => {
  try {
    const query = validityQuery(queries);

    if (!query) {
      throw new CustomError(400, 'Query parameter "q" is required');
    }

    const response = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=${query.begin_date}&end_date=${query.end_date}&fq=${query.fq}&page=1&q=${queries.q}&sort=${query.sort}&api-key=${process.env.NYT_API_KEY}`,
    );

    if (response.status !== 200) {
      throw new CustomError(400, 'Failed to fetch data');
    }

    const { docs, meta } = response.data.response;
    return { docs, meta };
  } catch (error) {
    console.error({ statusCode: error.statusCode, message: error.message });
    throw new CustomError(error.statusCode, error.message);
  }
};
