import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from "@angular/router";
import{dataFake} from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
 
photoCover:string="https://scontent-mia5-2.xx.fbcdn.net/v/t39.30808-6/468362696_10162403543209913_4983272198714123589_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeH1Y81qyELdXaDtKG_e51_zE6cpfOGmBEkTpyl84aYESXOQryWYDJ7-GADwzSKJVxihK2RvtaZ1K3h72bW-g8hJ&_nc_ohc=vXaRoSCvdycQ7kNvwGW_3Pe&_nc_oc=AdmPGOmvK0iRAYdiEVgv-mz9LVmURD0M9zzDIQ8Y_XaHEicYGuRC6XcFzUUSSHNAjRE&_nc_zt=23&_nc_ht=scontent-mia5-2.xx&_nc_gid=0PjH0hYpp7Z4x6Hc3LRE6Q&oh=00_AfZeY9RUFX-FQGia3yT38ri6LB7ZD8VrItHKZLL0LLOPbw&oe=68C39F58";
  contentTitle:string="";
  contentDescription:string="";
  private id :string | null ="0";
  constructor(
    private route:ActivatedRoute
  ){
    
  }
   ngOnInit(): void {
    this.route.paramMap.subscribe(value=>{  
        this.id = value.get("id");
     this.setValuesComponents(this.id);}
 
    )

    
  }
 setValuesComponents(id:string | null){
    const result = dataFake.filter(article=>
      article.id == id
    )[0]

  if(result){
    this.photoCover=result.photo
    this.contentTitle =result.title;
    this.contentDescription=result.description;
  }
    
  }
 
}
