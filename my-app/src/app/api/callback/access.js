const { Client, Databases } = require('node-appwrite');

const client = new Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT)
  .setProject(process.env.APPWRITE_PROJECT_ID)
  .setKey(process.env.APPWRITE_API_KEY);

const databases = new Databases(client);

module.exports = async function ({req, res}) {
  try{  
    const { key_id, user_id, consumer_key, consumer_secret, key_permissions, store_url } = req.body;
    console.log(req.body)
    return 
    
    // Save credentials in Appwrite database
    await databases.createDocument('woocommerce_stores', 'unique()', {
      userId: user_id,
      store_url,
      consumer_key,
      consumer_secret,
      key_permissions
    });

    res.json({ success: true, oauth_token });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, error: error.message });
  }
};
