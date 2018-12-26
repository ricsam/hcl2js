# hcl to js (and js to hcl1)

## Usage
```javascript
const hcl2js = require('../dist/index');

const hcl = `"output" = {
  "pet" = {
    "value" = "cat"
  }
}`;

const js = {
  "output": [
    {
      "pet": [
        {
          "value": "cat"
        }
      ]
    }
  ]
};

test('toJSON', () => {
  const rep = hcl2js.toJs(hcl);
  expect(rep).toEqual(js);
});

test('toHCL', () => {
  const rep = hcl2js.toHcl(js);
  expect(rep).toEqual(hcl);
});
```

Observe that the hcl is of version 1 when converting js objects to hcl.s
