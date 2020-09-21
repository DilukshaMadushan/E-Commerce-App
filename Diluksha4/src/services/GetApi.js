const apiUri = 'https://www.waytoogo.com/wp-json/wc/v3/';
const apiKeys = 'consumer_key=ck_2364cfdfdd30c2db7129b6b7b9b4bfaf27704d48&consumer_secret=cs_e9d202b284f791dc3da5e1f6f7495ac86b6140d6';

const GetAPI = {
  categoryApi: async (page) => {
    return fetch(
      apiUri+'products/categories?'+apiKeys+'&orderby=id&per_page=100&page='+page,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': ('Bearer '+token)
        },
      },
    );
  },

  MainCategoryApi: async () => {
    return fetch(
      apiUri+'products/categories?'+apiKeys+'&orderby=id&per_page=100&parent=0',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': ('Bearer '+token)
        },
      },
    );
  },

  getSliderImages: async () => {
    return fetch(
      apiUri+'products/7676?'+apiKeys,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': ('Bearer '+token)
        },
      },
    );
  },

  categoryItemsApi: async (id, page, sort) => {
    return fetch(
      apiUri+'products?'+apiKeys+'&per_page=40&category=' +
        id +
        '&page=' +
        page+'&orderby='+sort
        ,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': ('Bearer '+token)
        },
      },
    );
  },
  ItemApi: async (id) => {
    return fetch(
      apiUri+'products/' +
        id +
        '?'+apiKeys,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': ('Bearer '+token)
        },
      },
    );
  },

  searchApi: async (search) => {
    return fetch(
      apiUri+'products?'+apiKeys+'&per_page=50&search=' +
        search,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': ('Bearer '+token)
        },
      },
    );
  },

  searchByTagsApi: async (tag) => {
    return fetch(
      apiUri+'products?'+apiKeys+'&per_page=50&tag=' +
        tag,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': ('Bearer '+token)
        },
      },
    );
  },

  authLoadingApi: async (id) => {
    return fetch(
      apiUri+'customers/' +
        id +
        '?'+apiKeys,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': ('Bearer '+token)
        },
      },
    );
  },

  deliveryTextInputApi: async (signInId) => {
    return fetch(
      apiUri+'customers/' +
        signInId +
        '?'+apiKeys,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': ('Bearer '+token)
        },
      },
    );
  },

  getDeliveryZones: async () => {
    return fetch(
      apiUri+'shipping/zones?'+apiKeys,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': ('Bearer '+token)
        },
      },
    );
  },

  getDeliveryZoneMethods: async (id) => {
    return fetch(
      apiUri+'shipping/zones/'+id.toString()+'/methods?'+apiKeys,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': ('Bearer '+token)
        },
      },
    );
  },

  homeImageRowApi: async () => {
    return fetch(
      apiUri+'products?'+apiKeys+'&per_page=50&category=192',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': ('Bearer '+token)
        },
      },
    );
  },

  homeImageRow2Api: async () => {
    return fetch(
      apiUri+'products?'+apiKeys+'&per_page=50&category=229',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': ('Bearer '+token)
        },
      },
    );
  },

  myOrdersApi: async (signInId) => {
    return fetch(
      apiUri+'orders?'+apiKeys+'&customer=' +
        signInId,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  },

  profileUpdateApi: async (signInId) => {
    return fetch(
      apiUri+'customers/' +
        signInId +
        '?'+apiKeys,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': ('Bearer '+token)
        },
      },
    );
  },
  ItemTagsApi: async () => {
    return fetch(
      apiUri+'products/tags?'+apiKeys+'&per_page=50',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': ('Bearer '+token)
        },
      },
    );
  },

  getReviewsApi: async (id) => {
    return fetch(
      apiUri+'products/reviews?'+apiKeys+'&product=' +
        id,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': ('Bearer '+token)
        },
      },
    );
  },
  getShippingCostApi: async () => {
    return fetch(
      apiUri+'shipping/zones/5/methods?'+apiKeys,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': ('Bearer '+token)
        },
      },
    );
  },
  getVariationItemsApi: async (id) => {
    return fetch(
      apiUri+'products/' +
        id +
        '/variations?'+apiKeys,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': ('Bearer '+token)
        },
      },
    );
  },
};

export default GetAPI;
