import SwaggerParser from "@apidevtools/swagger-parser";
import util from 'util'
import fs from 'fs'
import YAML from 'yaml'

const run = async () => {

  try {
    let parser = new SwaggerParser();
    // const api = await parser.validate("docs/bankid_for_sep.yml")
    // console.log("API name: %s, Version: %s", api.info.title, api.info.version);

    // const dereferenced = await parser.dereference("docs/bankid_for_sep.yml")
    // console.log(dereferenced);
    
    const bundled = await parser.bundle("docs/bankid_for_sep.yml")
    console.log(bundled);
    fs.writeFileSync('docs/result.yml', YAML.stringify(bundled))
    
    // const resolved = await parser.resolve("docs/bankid_for_sep.yml")
    // console.log(resolved);
    
    console.log("Done");
  }
  catch(err: any) {
    console.error(util.inspect(err, false, 4));
  }}

run()