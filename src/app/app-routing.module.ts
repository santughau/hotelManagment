import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'your-order',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'search-chef',
    loadChildren: () => import('./pages/search-chef/search-chef.module').then( m => m.SearchChefPageModule)
  },
  {
    path: 'profile-menu',
    loadChildren: () => import('./pages/popup/profile-menu/profile-menu.module').then( m => m.ProfileMenuPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./pages/setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'profile-page',
    loadChildren: () => import('./pages/profile-page/profile-page.module').then( m => m.ProfilePagePageModule)
  },
  {
    path: 'my-orders',
    loadChildren: () => import('./pages/my-orders/my-orders.module').then( m => m.MyOrdersPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./pages/popup/order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./pages/messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'filters',
    loadChildren: () => import('./pages/filters/filters.module').then( m => m.FiltersPageModule)
  },
  {
    path: 'book-achef',
    loadChildren: () => import('./pages/book-achef/book-achef.module').then( m => m.BookAchefPageModule)
  },
  {
    path: 'change-address',
    loadChildren: () => import('./pages/change-address/change-address.module').then( m => m.ChangeAddressPageModule)
  },
  {
    path: 'thankyou',
    loadChildren: () => import('./pages/components/thankyou/thankyou.module').then( m => m.ThankyouPageModule)
  },
  {
    path: 'my-favourite',
    loadChildren: () => import('./pages/my-favourite/my-favourite.module').then( m => m.MyFavouritePageModule)
  },
  {
    path: 'your-order',
    loadChildren: () => import('./pages/your-order/your-order.module').then( m => m.YourOrderPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
