const hcl2json = require('./dist/hcl2json');

module.exports = {
  toJSON: function toJSON(hclString) {
    try {
      const [jsonString, err] = hcl2json.toJSON(hclString) 
      if (err) {
        throw new Error(err);
      }
      return JSON.parse(jsonString);
    } catch (err) {
      console.log(err);
    }
    return null;
  },
  toHCL: function toHCL(jsObject) {
    try {
      const [hclString, err] = hcl2json.toHCL(
        JSON.stringify(jsObject)
      );
      if (err) {
        throw new Error(err);
      }
      return hclString;
    } catch (err) {
      console.log(err);
    }
    return null;
  }
}
