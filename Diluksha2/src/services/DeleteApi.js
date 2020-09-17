const apiUri = 'https://www.waytoogo.com/wp-json/wc/v3/';
const apiKeys = 'consumer_key=ck_2364cfdfdd30c2db7129b6b7b9b4bfaf27704d48&consumer_secret=cs_e9d202b284f791dc3da5e1f6f7495ac86b6140d6';

const DeleteAPI = {
    deleteCustomer: async (id) => {
      return fetch(
        apiUri+"customers/"+id+"?"+apiKeys+"&force=true",
        {
          method: "DELETE"
        }
      );
    },
}

export default DeleteAPI;