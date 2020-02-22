import { Component } from "@angular/core";
const template = require("./function-test.component.html");
/* global console, Excel, require */

@Component({
  selector: "app-function-test",
  template
})
export class FunctionTestComponent {
  welcomeMessage = "Welcome";

  async run() {
    try {
      await Excel.run(async context => {
        /**
         * Insert your Excel code here
         */
        const range = context.workbook.getSelectedRange();

        // Read the range address
        range.load("address");

        // Update the fill color
        range.format.fill.color = "yellow";

        await context.sync();
        console.log(`The range address was ${range.address}.`);
      });
    } catch (error) {
      console.error(error);
    }
  }
}