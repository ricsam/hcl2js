const hcl2json = require('./dist/hcl2json');

module.exports = {
  toJs: function toJSON(hclString) {
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
  toHcl: function toHCL(jsObject) {
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
