//jwt
const get_jwt = () => {
    try {
      // Read the ACCESS_TOKEN from cookies
      const jwt_token = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      );
      if(jwt_token) return jwt_token;
      else document.cookie = "token" + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'; return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

export default get_jwt;