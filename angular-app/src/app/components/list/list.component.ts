import { Component, OnInit, Input } from '@angular/core';
import { MapTo } from "@adobe/cq-angular-editable-components";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() items: object[];

  constructor() { }

  get events(): Event[] {
    return this.items.map(item => {
        return new Event(item);
    });
  }

  ngOnInit() {
  }

}

class Event {
  private monthNames: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
 
  date: Date;
  path: string;
  url: string;
  title: string;
  description: string;
 
  constructor(data) {
    this.path = data.path;
    this.title = data.title;
    this.description = data.description;
    this.url = data.url;
    this.date = new Date(data.lastModified);
  }
 
  public get imageUrl(): string {
    return this.path + '/_jcr_content/root/responsivegrid/image.coreimg.jpeg';
  }
 
  public get month(): string {
    return this.monthNames[this.date.getMonth()];
  }
 
  public get day(): string {
    let tmp = this.date.getDate().toString();
 
    if (tmp.length === 1) {
      tmp = '0' + tmp;
    }
 
    return tmp;
  }
}

const ListEditConfig = {
  emptyLabel: 'List',
 
  isEmpty: function(componentData) {
    return !componentData || !componentData.items || 
     componentData.items.length < 1;
  }
};

MapTo('wknd-events/components/content/list')(ListComponent, ListEditConfig);
