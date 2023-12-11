const Usables = {
  //weather key for api
  weatherKey: "dcd32d369d64f26799658ac612a667ac",
  // google key for api
  googleKey: "",
  //String XSS validation
  validateXSS: function (xssValue: string) {
    return String(xssValue).replace(/[^\w. ]/gi, function (c) {
      return "\\u" + ("0000" + c.charCodeAt(0).toString(16)).slice(-4);
    });
  },
  //Capitalizer String
  capitalizer: function (str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
};

export default Usables;
