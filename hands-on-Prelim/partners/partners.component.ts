import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
  
  list= [1,2,3,4,5];

  partners: any[] = [{ 
    company: "Microsoft", 
    trademark: "assets/img/chrome.png",
    sponsorship: "Platinum", 
    website: "https://www.microsoft.com/en-ph",
  },
  { 
    company: "Apple Inc.", 
    trademark: "assets/img/apple.png", 
    sponsorship: "Gold",
    website: "https://www.apple.com/ph/",
  },
  { company: "Amazon", 
    trademark: "assets/img/amazon.png", 
    sponsorship: "Silver", 
    website: "https://www.amazon.com/",
  },
  { company: "Google Inc.",
   trademark: "assets/img/google.png",
   sponsorship: "Bronze",
    website: "https://www.google.com/",
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
