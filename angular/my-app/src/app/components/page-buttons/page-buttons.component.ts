import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-buttons',
  templateUrl: './page-buttons.component.html',
  styleUrls: ['./page-buttons.component.css'],
})
export class PageButtonsComponent implements OnInit {
  pages!: number[];
  currentPage!: number;
  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    this.pages = [0, 1, 2, 3, 4];
    this.activeRoute.queryParamMap.subscribe((par) => {
      if (par.has('pageno')) {
        this.currentPage = Number(par.get('pageno'));
      }
    });
  }

  ngOnInit(): void {}

  setPage(event: Event) {
    let ele = event.target as HTMLAnchorElement;
    if(ele.innerText === "Next") {
      this.currentPage = Math.min(this.currentPage+1, this.pages[this.pages.length-1]);
    }else if(ele.innerText === "Previous") {
      this.currentPage = Math.max(this.currentPage-1, this.pages[0]);
    }else {
      this.currentPage = Number(ele.innerText);
    }

    this.router.navigate([], {
      queryParams: { pageno: this.currentPage },
      relativeTo: this.activeRoute,
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false, // do not trigger navigation
    });
  }
}
