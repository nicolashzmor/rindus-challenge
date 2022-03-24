import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {
  @Input() title!: string
  @Input() back: any[] = ['..']
  @Input() disableBackButton: boolean = false

  constructor(protected router: Router) {
  }

  ngOnInit(): void {
  }

}
