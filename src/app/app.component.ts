import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AppServiceService } from './services/app-service.service';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
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
    { title: 'Chef Details', url: '/chef-details', icon: 'mail' },
    { title: 'FAQs & Help', url: '/faq', icon: 'mail' },
  ];
  public labels = [];
  constructor(
    private router: Router,
    private service: AppServiceService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
   }

   initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
     this.pushToAppOnboarding();
   }
  
   async pushToAppOnboarding() {
     if (localStorage.getItem('onboarding')) {
      console.log("true");
      this.router.navigate(['/onboarding']);
     } else {
       console.log("false");
       //this.router.navigate(['/search-chef']);
    }
   }
}
