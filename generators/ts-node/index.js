"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the peachy ${chalk.red("generator-dskline")} generator!`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "projectName",
        message: "Name of the project?",
        default: ""
      }
    ];

    return this.prompt(prompts).then(answers => {
      this.answers = answers;
    });
  }

  writing() {
    [
      { template: "package.json" },
      { template: "src/index.ts" },
      { template: "tsconfig.json" }
    ].forEach(({ template }) => {
      this.fs.copyTpl(
        this.templatePath(template),
        this.destinationPath(template),
        { ...this.answers }
      );
    });
  }
};
