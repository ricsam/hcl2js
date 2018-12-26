const hcl2json = require('../index');


const hcl = `"output" = {
  "wef" = {
    "value" = "hello"
  }
}`;

const json = {
  "output": [
    {
      "wef": [
        {
          "value": "hello"
        }
      ]
    }
  ]
};

test('toJSON', () => {
  const rep = hcl2json.toJSON(hcl);
  expect(rep).toEqual(json);
});

test('toHCL', () => {
  const rep = hcl2json.toHCL(json);
  expect(rep).toEqual(hcl);
});
