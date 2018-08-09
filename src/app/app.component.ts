import { Component, OnInit, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  btnclk = false;
  i = 0;
  ngAfterViewInit(): void {
    setInterval(() => {
      this.i++;
    }, 1000);
  }
}
