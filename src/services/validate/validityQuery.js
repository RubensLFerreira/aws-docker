exports.validityQuery = (queries) => {
  for (const key in queries) {
    if (!queries[key]) {
      switch (key) {
        case 'begin_date':
          queries[key] = '20150101';
          break;
        case 'end_date':
          queries[key] = '20211231';
          break;
        case 'fq':
          queries[key] = 'The New Yor Times';
          break;
        case 'sort':
          queries[key] = 'newest';
          break;
        default:
          return false;
      }
    }
  }
  return queries;
};
