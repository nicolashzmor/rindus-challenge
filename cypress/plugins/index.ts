import * as resolve from 'resolve';
import cucumber from 'cypress-cucumber-preprocessor';

const config = (on: any, config: any) => {
  on("file:preprocessor", cucumber({
    typescript: resolve.sync("typescript")
  }));
  return config;
}

export default config;
