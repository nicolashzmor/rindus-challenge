import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";

import {debounce, interval, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-search-and-add-action-bar',
  templateUrl: './search-and-add-action-bar.component.html',
  styleUrls: ['./search-and-add-action-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchAndAddActionBarComponent implements OnInit {

  @Output() search: EventEmitter<string> = new EventEmitter<string>()

  public searchInput: FormControl = new FormControl()

  protected destroy$: Subject<void> = new Subject<void>()

  constructor() {
  }

  ngOnInit(): void {
    this.searchInput.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        debounce(() => interval(400))
      )
      .subscribe((value => this.search.emit(value)))
  }

  ngOnDestroy() {
    this.destroy$.next()
  }

}
