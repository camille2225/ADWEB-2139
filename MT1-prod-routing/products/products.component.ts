import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  //*NGIFELSE WAS USED TO CHECK IF THE TITLE WAS CORRECT.
   suretitle:boolean=true;
   notsuretitle:boolean=false;

  //*NGFOR WAS USED TO DISPLAY DETAILS OF THE PRODUCTS
  list = ["SHL0001",
          "Tshirt",
          "Comfortable, casual and loose fitting, our heavyweight dark color t-shirt will quickly become one of your favorites."];
  
  list1 = ["SHL0004",
           "Jogging Pants",
          "Made of fabric that allow for maximum comfort and ease."]

  list2 =["SHL0002",
          "Shoes",
          "Unstructured fabric shoulder bag that can either be worn parallel to your body, or across it. Discover the latest styles of yours."]
  
  list3 = ["SHL0003",
          "Handbag - 1",
          "Made of 100% natural material and can be customized with your favorite pictures and text for the perfect gift or casual accessory."]
  
  list4 = ["SHL0004",
          "Handbag - 2",
          "The straightforward box shape allows it to be seamlessly versatile with any style."]

  list5 = ["SHL0005",
          "Handbag - 3",
          "The iconic style is reborn with new dimensions and materials, expressing the Houses genuinely unique leather making legacy."]
    
  list6 = ["SHL0006",
          "Faceshields - 1",
          "New and improved face shields with comfortable glasses frames for adults and kids are here."]
  
  list7=["SHL0007",
        "Mugs",
        "Commuter mugs feature a rubber-lined lid for a tight, spill-resistant seal, twist the lid to reveal the sip opening"]
  
  list8 = ["SHL0008",
        "Faceshields - 2",
        "New and improved face shields with comfortable glasses frames for adults and kids are here."]
        
        constructor() { }

  ngOnInit(): void {
  }

}
