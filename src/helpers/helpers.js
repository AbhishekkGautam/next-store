export const getFeaturedProducts = productsArray =>
  [...productsArray].filter(product => product.featured);

export const priceAfterDiscount = (priceInMrp, discountInPercentage) => {
  let discounted_price = Math.trunc(
    priceInMrp - (priceInMrp * discountInPercentage) / 100
  );
  return Math.ceil(discounted_price / 100) * 100 - 1;
};

export const getUniqueValues = (data, type) => {
  let unique = data.map(item => item[type]);
  return [...new Set(unique)];
};

export const putCommasInPrice = price =>
  new Intl.NumberFormat("en-IN").format(price);

export const getMaxPriceForFilter = products => {
  let priceAfterDiscountArr = [...products].map(
    ({ priceInMrp, discountInPercentage }) => {
      let discounted_price = Math.trunc(
        priceInMrp - (priceInMrp * discountInPercentage) / 100
      );
      return Math.ceil(discounted_price / 1000) * 1000;
    }
  );
  return Math.max(...priceAfterDiscountArr);
};

export const getSortedProducts = (products, state) => {
  const { sortBy } = state;
  if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
    return [...products].sort((productOne, productTwo) => {
      let discountedPriceOfProdOne = priceAfterDiscount(
        productOne["priceInMrp"],
        productOne["discountInPercentage"]
      );
      let discountedPriceOfProdTwo = priceAfterDiscount(
        productTwo["priceInMrp"],
        productTwo["discountInPercentage"]
      );
      return discountedPriceOfProdTwo - discountedPriceOfProdOne;
    });
  }
  if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
    return [...products].sort((productOne, productTwo) => {
      let discountedPriceOfProdOne = priceAfterDiscount(
        productOne["priceInMrp"],
        productOne["discountInPercentage"]
      );
      let discountedPriceOfProdTwo = priceAfterDiscount(
        productTwo["priceInMrp"],
        productTwo["discountInPercentage"]
      );
      return discountedPriceOfProdOne - discountedPriceOfProdTwo;
    });
  }
  return products;
};

export const getFilteredProducts = (products, state) => {
  let tempProducts = [...products];
  if (state.categories.length !== 0) {
    tempProducts = tempProducts.filter(product =>
      state.categories.includes(product.categoryName)
    );
  }
  if (state.brands.length !== 0) {
    tempProducts = tempProducts.filter(product =>
      state.brands.includes(product.brand)
    );
  }
  tempProducts = tempProducts.filter(({ priceInMrp, discountInPercentage }) => {
    let price_after_discount = Math.trunc(
      priceInMrp - (priceInMrp * discountInPercentage) / 100
    );
    return price_after_discount <= state.price;
  });
  tempProducts = tempProducts.filter(
    ({ starRating }) => starRating >= state.rating
  );
  if (state.cashOnDelivery) {
    tempProducts = tempProducts.filter(({ cashOnDelivery }) => cashOnDelivery);
  }
  if (state.fastDelivery) {
    tempProducts = tempProducts.filter(({ fastDelivery }) => fastDelivery);
  }
  if (!state.includeOutOfStock) {
    tempProducts = tempProducts.filter(({ inStock }) => inStock > 0);
  }
  return tempProducts;
};
