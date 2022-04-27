import SwaggerParser from "@apidevtools/swagger-parser";
import util from 'util'

const run = async () => {
  let parser = new SwaggerParser();

  try {
    let parser = new SwaggerParser();
    const api = await parser.validate("docs/bankid_for_sep.yml")
    // parser.dereference("docs/bankid_for_sep.yml")
    console.log("API name: %s, Version: %s", api.info.title, api.info.version);
  }
  catch(err: any) {
    console.error(util.inspect(err, false, 4));
  }}

run()