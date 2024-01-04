import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[SetBackground]'
})
export class SetBackgroundDirective implements OnInit{
  @Input() test : any;

  constructor(
      private element : ElementRef,
      private renderer: Renderer2
    ){
      // console.log(this.renderer,'რენდერერ')
    // console.log(this.test)// გადმოცემული value არ იქნება ჯერ აღქმული. საწყისი - კი.
  }

  // თუ element - ს ავღწერთ როგორც private or public 
  // TypeScript შექმნის მას როგორც კლასის ფროფერთის.
  // განსხვავება ისაა რომ private ან public _ის გარეშე 
  // ის მხოლოდ constuctor შია ხელმისაწვდომი

// ხოლო ამ შემთხვევაში მას ონინიტში გამოვიყენებთ რაც უკეთესი პრაქტიკაა
// რადგან კონსტრუქტორში @Input() ფროფერთიები ჯერ არ არის ინიციალიზებული
// და შეიძლება მათი გამოყენების მოთხოვნილება იყოს უმჯობესია გვეწეროს 
// ngOninit ში ლოგიკა რადგან ისინი უკვე ინიციალიზებული იქნება
  ngOnInit(): void {
    // console.log(this.test)// აქ უკვე მისაწვდომია გადმოცემული მნიშვნელობა
    // this.element.nativeElement.style.backgroundColor = '#ffde5b'
    // this.element.nativeElement.style.color = 'black'
  //უკეთესი იქნება თუ Renderer2 ის საშუალებით მოვახდენთ იგივე ოპერაციას
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor', '#ffde5b')
    this.renderer.setStyle(this.element.nativeElement,'color', 'black')
  //რენდერერს აქვს კიდევ ბევრი თვისება როგორც setStyle()
  }


   @HostListener('click')
   click(){
    console.log(this.element.nativeElement,'foo log')
   }
}
