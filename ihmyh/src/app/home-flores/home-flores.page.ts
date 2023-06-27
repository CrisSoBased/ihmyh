import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-flores',
  templateUrl: './home-flores.page.html',
  styleUrls: ['./home-flores.page.scss'],
})
export class HomeFloresPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToHome() {
    this.router.navigate(['/home']);
  }
}
