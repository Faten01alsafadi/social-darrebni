import { Component } from '@angular/core';
import { Router } from '@angular/router'; // استيراد Router
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {



  constructor(private router: Router) {} 


  isAuthPage(): boolean {
    const currentRoute = this.router.url; // الحصول على المسار الحالي
    return currentRoute === '/login' || currentRoute === '/register'; // تحقق من المسار
  }
}
