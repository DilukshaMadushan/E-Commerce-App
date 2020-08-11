const GetAPI = {
  categoryApi: async () => {
    return fetch(
      "https://www.waytoogo.com/wp-json/wc/v3/products/categories?consumer_key=ck_62bbbe337d050335cacf5b4ae4ea791c5862125d&consumer_secret=cs_67f41238f54e68ffbd473a3ca6c64c455e735ecd&per_page=15&orderby=id&per_page=100",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          //'Authorization': ('Bearer '+token)
        },
      }
    );
  },

  categoryItemsApi: async (id) => {
    return fetch(
      "https://www.waytoogo.com/wp-json/wc/v3/products?consumer_key=ck_62bbbe337d050335cacf5b4ae4ea791c5862125d&consumer_secret=cs_67f41238f54e68ffbd473a3ca6c64c455e735ecd&per_page=50&category=" +
        id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          //'Authorization': ('Bearer '+token)
        },
      }
    );
  },

  searchApi: async (search) => {
    return fetch(
      "https://www.waytoogo.com/wp-json/wc/v3/products?consumer_key=ck_62bbbe337d050335cacf5b4ae4ea791c5862125d&consumer_secret=cs_67f41238f54e68ffbd473a3ca6c64c455e735ecd&per_page=50&search=" +
        search,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          //'Authorization': ('Bearer '+token)
        },
      }
    );
  },
  searchByTagsApi: async (tag) => {
    return fetch(
      "https://www.waytoogo.com/wp-json/wc/v3/products?consumer_key=ck_62bbbe337d050335cacf5b4ae4ea791c5862125d&consumer_secret=cs_67f41238f54e68ffbd473a3ca6c64c455e735ecd&per_page=50&tag=" +
        tag,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          //'Authorization': ('Bearer '+token)
        },
      }
    );
  },

  authLoadingApi: async (id) => {
    return fetch(
      "https://www.waytoogo.com/wp-json/wc/v3/customers/" +
        id +
        "?consumer_key=ck_62bbbe337d050335cacf5b4ae4ea791c5862125d&consumer_secret=cs_67f41238f54e68ffbd473a3ca6c64c455e735ecd",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          //'Authorization': ('Bearer '+token)
        },
      }
    );
  },

  deliveryTextInputApi: async (signInId) => {
    return fetch(
      "https://www.waytoogo.com/wp-json/wc/v3/customers/" +
        signInId +
        "?consumer_key=ck_62bbbe337d050335cacf5b4ae4ea791c5862125d&consumer_secret=cs_67f41238f54e68ffbd473a3ca6c64c455e735ecd",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          //'Authorization': ('Bearer '+token)
        },
      }
    );
  },

  homeImageRowApi: async () => {
    return fetch(
      "https://www.waytoogo.com/wp-json/wc/v3/products?consumer_key=ck_62bbbe337d050335cacf5b4ae4ea791c5862125d&consumer_secret=cs_67f41238f54e68ffbd473a3ca6c64c455e735ecd&per_page=50&category=192",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          //'Authorization': ('Bearer '+token)
        },
      }
    );
  },

  homeImageRow2Api: async () => {
    return fetch(
      "https://www.waytoogo.com/wp-json/wc/v3/products?consumer_key=ck_62bbbe337d050335cacf5b4ae4ea791c5862125d&consumer_secret=cs_67f41238f54e68ffbd473a3ca6c64c455e735ecd&per_page=50&category=229",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          //'Authorization': ('Bearer '+token)
        },
      }
    );
  },

  myOrdersApi: async (signInId) => {
    return fetch(
      "https://www.waytoogo.com/wp-json/wc/v3/orders?consumer_key=ck_62bbbe337d050335cacf5b4ae4ea791c5862125d&consumer_secret=cs_67f41238f54e68ffbd473a3ca6c64c455e735ecd&customer=" +
        signInId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },

  profileUpdateApi: async (signInId) => {
    return fetch(
      "https://www.waytoogo.com/wp-json/wc/v3/customers/" +
        signInId +
        "?consumer_key=ck_62bbbe337d050335cacf5b4ae4ea791c5862125d&consumer_secret=cs_67f41238f54e68ffbd473a3ca6c64c455e735ecd",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          //'Authorization': ('Bearer '+token)
        },
      }
    );
  },
  ItemTagsApi: async () => {
    return fetch(
      "https://www.waytoogo.com/wp-json/wc/v3/products/tags?consumer_key=ck_62bbbe337d050335cacf5b4ae4ea791c5862125d&consumer_secret=cs_67f41238f54e68ffbd473a3ca6c64c455e735ecd&per_page=50",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          //'Authorization': ('Bearer '+token)
        },
      }
    );
  },
};

export default GetAPI;
