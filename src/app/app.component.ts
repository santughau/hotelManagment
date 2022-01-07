import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Search Chef', url: '/search-chef', icon: 'mail' },
    { title: 'Setting', url: '/setting', icon: 'mail' },
    { title: 'Payment History', url: '/payment', icon: 'mail' },
    { title: 'My Orders', url: '/my-orders', icon: 'mail' },
    { title: 'Profile Page', url: '/profile-page', icon: 'mail' },
    { title: 'Messages', url: '/messages', icon: 'mail' },
    { title: 'Filters', url: '/filters', icon: 'mail' },
    { title: 'Book A Chef', url: '/book-achef', icon: 'mail' },
    { title: 'Change Address', url: '/change-address', icon: 'mail' },
    { title: 'My Favourite', url: '/my-favourite', icon: 'mail' },
    { title: 'Your Order', url: '/your-order', icon: 'mail' },
    { title: 'FAQs & Help', url: '/faq', icon: 'mail' },
  ];
  public labels = [];
  constructor() {}
}
