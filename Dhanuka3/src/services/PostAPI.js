const PostAPI = {

    registerApi: async (body) => {
        return fetch('https://www.waytoogo.com/wp-json/wc/v3/customers?consumer_key=ck_62bbbe337d050335cacf5b4ae4ea791c5862125d&consumer_secret=cs_67f41238f54e68ffbd473a3ca6c64c455e735ecd',
        {
          method:'POST',
          headers : { 'Content-Type': 'application/json'},
          body:body,
        })
    },

    deliveryTextInputsApi: async (signInId,body) => {
        return fetch('https://www.waytoogo.com/wp-json/wc/v3/customers/'+signInId+'?consumer_key=ck_62bbbe337d050335cacf5b4ae4ea791c5862125d&consumer_secret=cs_67f41238f54e68ffbd473a3ca6c64c455e735ecd',
        {
          method:'PUT',
          headers : { 'Content-Type': 'application/json'},
          body:body,
        })
    },

    updateProfileApi: async (signInId,body) => {
        return fetch('https://www.waytoogo.com/wp-json/wc/v3/customers/'+signInId+'?consumer_key=ck_62bbbe337d050335cacf5b4ae4ea791c5862125d&consumer_secret=cs_67f41238f54e68ffbd473a3ca6c64c455e735ecd',
        {
          method:'PUT',
          headers : { 'Content-Type': 'application/json'},
          body:body,
        })
    },

    paymentInputsApi: async (body) => {
        return fetch('https://www.waytoogo.com/wp-json/wc/v3/orders?consumer_key=ck_62bbbe337d050335cacf5b4ae4ea791c5862125d&consumer_secret=cs_67f41238f54e68ffbd473a3ca6c64c455e735ecd',
        {
          method:'POST',
          headers : { 'Content-Type': 'application/json'},
          body:body
        })
    },

    payhereApi: async () => {
        return fetch('https://sandbox.payhere.lk/pay/checkout?merchant_id=1215003&return_url=https://www.waytoogo.com/&first_name=Diluksha&last_name=Madushan&email=diluksha.diluksha.madushan@gmail.com&phone=0702988964&address=No:8,Napana, Kandy&city=Kandy&country=Sri Lanka&order_id=1&items=1265&currency=LKR&amount=120&cancel_url=https://www.waytoogo.com&notify_url=https://www.waytoogo.com',{
            method: 'POST',
            headers: {
                'Content-Type': 'text/html; charset=UTF-8',
                //"Accept": 'text/html; charset=UTF-8'
                //'Authorization': ('Bearer '+token)
            },
            //body:body 
        })
    },
}
  
  export default PostAPI;