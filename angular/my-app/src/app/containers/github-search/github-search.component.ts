import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css'],
  providers: [SearchService],
})
export class GithubSearchComponent {
  search = new FormControl();

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(
        debounceTime(500), // the subscribe() will execute only if there's a pause of more than 500ms between the keystrokes
        distinctUntilChanged(), // will execute only when the value differs from the last value it searched for
        switchMap((val) => this.searchService.searchRepos(val)) // .subsribe() will be managed by rxjs's switchMap to cancel out non-required older requests if they have not completed from the client side
      )
      .subscribe((value) => {
        console.log(value);
        // this.getRepos(value);  //  will be managed by rxjs's switchMap
      });
  }

  getRepos(query: string) {
    this.searchService.searchRepos(query).subscribe(
      (data) => console.log(data),
      (err) => console.log(err)
    );
  }
}
