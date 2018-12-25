package main

import (
	"bytes"
	"encoding/json"

	"github.com/gopherjs/gopherjs/js"

	"github.com/hashicorp/hcl"
	hclPrinter "github.com/hashicorp/hcl/hcl/printer"
	jsonParser "github.com/hashicorp/hcl/json/parser"
)

func main() {
	js.Module.Get("exports").Set("toJSON", toJSON)
	js.Module.Get("exports").Set("toHCL", toHCL)
	// res, err := toJSON(` output "wef" { value = "hello" } `)
	// if err != nil {
	// 	print(err)
	// }
	// print(res)

	// toHCL(`{
	// 	"output": [
	// 		{
	// 			"wef": [
	// 				{
	// 					"value": "hello"
	// 				}
	// 			]
	// 		}
	// 	]
	// }`)

}

func handleError(err error) {
	e := recover()

	if e == nil {
		return
	}

	if e, ok := e.(*js.Error); ok {
		err = e
	} else {
		panic(e)
	}
}

func toJSON(input string) (res string, err error) {

	var v interface{}

	parsingErr := hcl.Unmarshal([]byte(input), &v)
	if err != nil {
		return "", parsingErr
	}

	jsonString, marshalErr := json.MarshalIndent(v, "", "  ")
	if err != nil {
		return "", marshalErr
	}

	res = string(jsonString)

	return res, err
}

func toHCL(jsonString string) (res string, err error) {

	ast, err := jsonParser.Parse([]byte(jsonString))

	if err != nil {
		return "", err
	}

	var buf bytes.Buffer

	hclPrinter.Fprint(&buf, ast)

	res = buf.String()

	return res, err
}
