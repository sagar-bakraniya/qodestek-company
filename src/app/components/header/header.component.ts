import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Logout } from 'src/app/store/actions/use.actions';
import { selectFeatureCount } from 'src/app/store/selector/user.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  counte$: any;
  constructor(
    private store: Store,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.counte$ = this.store.select(selectFeatureCount);
  }

  logout() {
    this.store.dispatch(Logout());
    this.router.navigate(['/login']);
  }
}
