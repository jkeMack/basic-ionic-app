import { Input, KeyValueDiffer, ElementRef, KeyValueDiffers, OnDestroy, DoCheck, Directive } from "@angular/core";
import Echarts from 'echarts';

@Directive({
  selector: '[ngx-echarts]',
  exportAs: 'ngxEcharts'
})
/**
 * @description refactor from {@link https://github.com/denvey/ng2-echarts|ng2-echarts}
 */
export class NgxEcharts implements OnDestroy, DoCheck {

  /**
   * {@link http://echarts.baidu.com/option.html}
   */
  private _options: object;

  /**
   * {@link https://github.com/angular/angular/blob/master/packages/common/src/directives/ng_style.ts}
   * @param v
   */
  @Input('ngx-echarts')
  set options(v: object) {
    this._options = v;
    if (!this._differ && v) {
      this._differ = this._differs.find(v).create();
    }
  };

  private _chart: any;
  private _size: {width: number, height: number} = {width: undefined, height: undefined};
  private _differ: KeyValueDiffer<any, any>;

  constructor(private el: ElementRef, private _differs: KeyValueDiffers) {
  }

  reflow() {
    if (!this._chart || !this._options) return;
    this._chart.resize();
  }

  ngDoCheck() {
    if (this.sizeChanged()) {
      this._size.width = this.el.nativeElement.offsetWidth;
      this._size.height = this.el.nativeElement.offsetHeight;
      this.reflow();
    }
    if (this._differ.diff(this._options)) {
      this.draw(this._options);
    }
  }

  sizeChanged() {
    return this._size.width == this.el.nativeElement.offsetWidth &&
      this._size.height == this.el.nativeElement.offsetHeight;
  }

  ngOnDestroy() {
    if (this._chart) {
      this._chart.dispose();
    }
  }

  draw(options: any): void {

    if (!options) {
      console.log('No valid options...');
      console.log(options);
      return;
    }
    if (options.init) {
      options.init(Echarts);
    }

    if (options.series || options.data) {

      if (this._chart) {
        //release chart
        if (options.dispose) {
          this._chart.dispose();
        }
        if (options.clear) {
          this._chart.clear();
        }
      }

      this._chart = Echarts.init(this.el.nativeElement);

      if (options.loading) {
        this._chart.showLoading();
      }

      this._chart.setOption(options);
      if (options.loading) {
        this._chart.hideLoading();
      }

      if (options.dispatchAction) {
        this._chart.dispatchAction(options.dispatchAction);
      }

      if (options.off) {
        for (let event of Object.keys(options.off)) {
          this._chart.off(event, options.off[event])
        }
      }

      if (options.on) {
        for (let event of Object.keys(options.on)) {
          this._chart.on(event, options.on[event])
        }
      }

    } else {
      console.log('No valid options...');
      console.dir(options);
    }
  }
}
