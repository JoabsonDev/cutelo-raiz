function products() {
  return {
    getAll(data: Record<string, Product[]>): Product[] {
      const products = Object.values(data).reduce((acc, produtos) => {
        return acc.concat(produtos);
      }, [] as Product[]);
      return products;
    },
    getByCategory(
      data: Record<string, Product[]>,
      category: string
    ): Product[] {
      const categoriaOriginal = Object.keys(data).find(
        (key) => key.toLowerCase() === category.toLowerCase()
      )!;

      return categoriaOriginal ? data[categoriaOriginal] : [];
    },
  };
}

export default products;
