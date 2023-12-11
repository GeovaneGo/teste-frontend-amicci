const Usables = {
  //weather key for api
  weatherKey: "dcd32d369d64f26799658ac612a667ac",
  // google key for api
  googleKey: "AIzaSyAS8WyUKsP7QrxOIzt0kz2xsbf7tNkfjio",
  //String XSS validation
  validateXSS: function (xssValue: string) {
    return String(xssValue).replace(/[^\w. ]/gi, function (c) {
      console.log("N pode" + xssValue);
      return "\\u" + ("0000" + c.charCodeAt(0).toString(16)).slice(-4);
    });
  },
  //Capitalizer String
  capitalizer: function (str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
};

export default Usables;
