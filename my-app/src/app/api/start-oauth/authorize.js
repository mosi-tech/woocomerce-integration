module.exports = async function({req, res}) {
  const { storeUrl, userId } = JSON.parse(req.body);
  const authorizationUrl = `${storeUrl}/wc-auth/v1/authorize`;
  
  const params = {
    app_name: 'My App Name',
    scope: 'read_write',
    user_id: userId, 
    return_url: process.env.WC_RETURN_URL,
    callback_url: `${process.env.WC_CALLBACK_URL}?store_url=${encodeURIComponent(storeUrl)}`
  };

  // Construct the query string
  const queryString = new URLSearchParams(params).toString();
  return `${authorizationUrl}?${queryString}`;
};
