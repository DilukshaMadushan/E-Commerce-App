const apiUri = 'https://www.waytoogo.com/wp-json/wc/v3/';
const apiKeys = 'consumer_key=ck_2364cfdfdd30c2db7129b6b7b9b4bfaf27704d48&consumer_secret=cs_e9d202b284f791dc3da5e1f6f7495ac86b6140d6';

const PostAPI = {
  registerApi: async (body) => {
    return fetch(
      apiUri+"customers?"+apiKeys,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: body,
      }
    );
  },

  deliveryTextInputsApi: async (signInId, body) => {
    return fetch(
      apiUri+"customers/" +
        signInId +
        "?"+apiKeys,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: body,
      }
    );
  },

  updateProfileApi: async (signInId, body) => {
    return fetch(
      apiUri+"customers/" +
        signInId +
        "?"+apiKeys,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: body,
      }
    );
  },

  paymentInputsApi: async (body) => {
    return fetch(
      apiUri+"orders?"+apiKeys,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: body,
      }
    );
  },
  reviewApi: async (body) => {
    return fetch(
      apiUri+"products/reviews?"+apiKeys,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: body,
      }
    );
  },

  payhereApi: async () => {
    return fetch(
      "https://sandbox.payhere.lk/pay/checkout?merchant_id=1215003&return_url=https://www.waytoogo.com/&first_name=Diluksha&last_name=Madushan&email=diluksha.diluksha.madushan@gmail.com&phone=0702988964&address=No:8,Napana, Kandy&city=Kandy&country=Sri Lanka&order_id=1&items=1265&currency=LKR&amount=120&cancel_url=https://www.waytoogo.com&notify_url=https://www.waytoogo.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "text/html; charset=UTF-8",
          //"Accept": 'text/html; charset=UTF-8'
          //'Authorization': ('Bearer '+token)
        },
        //body:body
      }
    );
  },
};

export default PostAPI;

