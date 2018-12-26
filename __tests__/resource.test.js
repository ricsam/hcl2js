const hcl2json = require('../index');


const hcl = `"resource" = {
  "aws_api_gateway_domain_name" = {
    "domain_api_gateway_domain" = {
      "domain_name" = "some.domain.com"
    }
  }
}`;

const json = {
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
  const rep = hcl2json.toJSON(hcl);
  expect(rep).toEqual(json);
});

test('toHCL', () => {
  const rep = hcl2json.toHCL(json);
  expect(rep).toEqual(hcl);
});
