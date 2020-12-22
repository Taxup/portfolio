import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  isVisible: boolean;
  @Output() onChangeVisibility = new EventEmitter<boolean>();

  constructor() { }

  async ngOnInit(): Promise<void> {
    await this.delay(2500);
    this.onChangeVisibility.emit(true);
    this.isVisible = true;
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
