const PutAPI = {
  ratingPostApi: async (productId, body) => {
    return fetch(
      "https://www.waytoogo.com/wp-json/wc/v3/products/" +
        productId +
        "?consumer_key=ck_62bbbe337d050335cacf5b4ae4ea791c5862125d&consumer_secret=cs_67f41238f54e68ffbd473a3ca6c64c455e735ecd",
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: body,
      }
    );
  },
};
export default PutAPI;
