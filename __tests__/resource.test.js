const hcl2js = require('../dist/index');


const hcl = `"resource" = {
  "aws_api_gateway_domain_name" = {
    "domain_api_gateway_domain" = {
      "domain_name" = "some.domain.com"
    }
  }
}`;

const js = {
  "resource": [
    {
      "aws_api_gateway_domain_name": [
        {
          "domain_api_gateway_domain": [
            {
              "domain_name": "some.domain.com"
            }
          ]
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
