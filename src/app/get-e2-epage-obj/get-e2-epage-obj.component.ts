import { Component, OnInit } from '@angular/core';
import { E2eIdCollectorService } from '../e2e-id-collector.service';

@Component({
  selector: 'app-get-e2-epage-obj',
  templateUrl: './get-e2-epage-obj.component.html',
  styleUrls: ['./get-e2-epage-obj.component.css']
})
export class GetE2EpageObjComponent implements OnInit {

  constructor(
    private e2eIdCollectorService: E2eIdCollectorService
  ) { }

  ngOnInit() {
  }
  genE2EPo() {
    let pageObject = '';
    pageObject += 'export class Page {\n';

    this.e2eIdCollectorService.allIds.forEach(x => {
      // pageObject += '\t@E2E' + x.type.toUpperCase() + '()\n';
      pageObject += '\t' + x.id + ': ElementFinder = element(by.css(\'.e2e-' + x.id + '\'));\n';
      switch (x.type.toLowerCase()) {
        case 'span':
          pageObject += '\tget' + this.toPascalCase(x.id) + 'Value() {\n';
          pageObject += '\t\treturn this.' + x.id + '.getText();\n';
          pageObject += '\t}\n';
          break;
        case 'button':
          pageObject += '\tclick' + this.toPascalCase(x.id) + '() {\n';
          pageObject += '\t\treturn this.' + x.id + '.click();\n';
          pageObject += '\t}\n';
          pageObject += '\tget' + this.toPascalCase(x.id) + 'Value() {\n';
          pageObject += '\t\treturn this.' + x.id + '.getText();\n';
          pageObject += '\t}\n';
        break;
      }
    });
    pageObject += '}';
    console.log(pageObject);
  }

  toPascalCase(source: string): string {
    return source[0].toUpperCase() + source.substring(1, source.length);
  }
}
