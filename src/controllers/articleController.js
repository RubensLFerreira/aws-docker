const { articleService } = require('../services/articleService');

const CustomError = require('../helpers/CustomError');

exports.articlesController = async (request, response) => {
  const { begin_date, end_date, fq, q, sort } = request.query;

  try {
    const queries = {
      begin_date,
      end_date,
      fq,
      q,
      sort,
    };

    const articles = await articleService(queries);
    response.status(200).json(articles);
  } catch (error) {
    if (error instanceof CustomError) {
      response
        .status(error.statusCode)
        .json({
          statusCode: error.statusCode,
          name: error.name,
          message: error.message,
        });
    } else {
      response.status(500).json({ message: 'Internal server error' });
    }
  }
};
