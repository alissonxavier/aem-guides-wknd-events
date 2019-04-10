import { Component, OnInit, Input } from '@angular/core';
import {MapTo} from '@adobe/cq-angular-editable-components';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() font: string;
  @Input() title: string;
  @Input() type: string;

  constructor() { }

  get hasTitle() {
    return this.title && this.title.trim().length > 0;
  }

  get fontMessage() {
    return this.font ? this.font : '';
  }

  get titleMessage() {
    return this.title ? this.title : '';
  }

  get typeMessage() {
    return this.type ? this.type : '';
  }

  ngOnInit() {
  }

}

const TitleEditConfig = {
  emptyLabel: 'Title',
 
  isEmpty: function(componentData) {
    return !componentData || !componentData.title || componentData.title.trim().length < 1;
  }
};

MapTo('wknd-events/components/content/title')(TitleComponent,TitleEditConfig);