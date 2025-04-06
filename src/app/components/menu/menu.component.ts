import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  firstActive: number = 1; // Set first active menu item

  // Menu items
  links = [
    { id: 1, link: "home", content: "Home", logo: "assets/images/home.png" },
    { id: 2, link: "about", content: "About", logo: "assets/images/about.png" },
    { id: 3, link: "skills", content: "Skills", logo: "assets/images/skills1.png" },
    { id: 4, link: "education", content: "Education", logo:"assets/images/education1.png" },
    { id: 5, link: "contact", content: "Contact", logo:'assets/images/contact.png'}
    ];

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    const list = this.elementRef.nativeElement.querySelectorAll('.list');

    list.forEach((item: HTMLElement) => {
      item.addEventListener('click', () => {
        list.forEach((el:any) => el.classList.remove('active'));
        item.classList.add('active');
      });
    });
  }
    
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  
}
