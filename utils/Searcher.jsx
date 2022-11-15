const Searcher = (arr, query) => {
    const check = ((query) => (object) =>
        Object.values(object).some(
          (value) =>
            (typeof value === 'string' &&
              value.toLowerCase().includes(query)) ||
            (value && typeof value === 'object' && check(value))
        )
    )(query.toLowerCase());

    return arr.filter(check);
};

export default Searcher;