import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MulterService } from '../service/multer.service';
@Component({
  selector: 'app-singleimg-show',
  templateUrl: './singleimg-show.component.html',
  styleUrls: ['./singleimg-show.component.css']
})
export class SingleimgShowComponent implements OnInit {
  id: any;
  newimgname: any;

  constructor(private route: ActivatedRoute, private singleservice: MulterService) { }
  imgbaseurl = environment.imgbaseurl;
  ngOnInit(): void {
    this.route.params.subscribe(
      res=>{
        // console.log(res.id);
        this.id = res.id
      }
    )

    this.singleservice.getsingleimg(this.id).subscribe(
      res=>{
        console.log(res);
        this.newimgname = res
      }
    )

  }

}
