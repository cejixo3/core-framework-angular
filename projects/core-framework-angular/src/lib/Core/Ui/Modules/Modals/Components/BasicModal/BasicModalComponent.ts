import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'ui-modal-basic',
  templateUrl: './BasicModalComponent.html',
  styleUrls: ['./BasicModalComponent.scss']
})
export class BasicModalComponent
  implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {


  @ViewChild('content', {read: ViewContainerRef, static: false}) content: ViewContainerRef;


  public component: Component;

  private bodyClass: string = '';
  private paddingRight: string = '';

  constructor() {
    this.bodyClass = document.querySelector('body').getAttribute('class');
    this.paddingRight = document.querySelector('body').style['padding-right'];
  }

  ngAfterViewInit(): void {

    document.querySelector('body').setAttribute('class', `${this.bodyClass} modal-open`);
    document.querySelector('body').style['padding-right'] = '13px;';

  }

  ngAfterContentInit(): void {
    this.content.insert(this.component['hostView']);
  }

  ngOnInit() {


  }

  ngOnDestroy(): void {
    document.querySelector('body').setAttribute('class', this.bodyClass);
    document.querySelector('body').style['padding-right'] = this.paddingRight;
  }

  discard() {

  }
}
