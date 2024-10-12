import { Component } from '@angular/core';
import { Router } from '@angular/router'; // استيراد Router
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {} 


  isAuthPage(): boolean {
    const currentRoute = this.router.url; // الحصول على المسار الحالي
    return currentRoute === '/login' || currentRoute === '/register'; // تحقق من المسار
  }
}
