import {ChangeDetectionStrategy, Component, HostBinding, Input, OnInit} from '@angular/core';
import {WorkPosition} from "../../../core/models/work-position.model";

@Component({
  selector: 'app-work-position-table-label',
  templateUrl: './work-position-table-label.component.html',
  styleUrls: ['./work-position-table-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkPositionTableLabelComponent implements OnInit {
  @Input() position!: WorkPosition

  @HostBinding('style.borderColor')
  color!: string

  constructor() {
  }

  ngOnInit(): void {
    this.color = this.position.color
  }

}
