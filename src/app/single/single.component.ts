import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MulterService } from '../service/multer.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  submitted: boolean = false
  hidebutton: boolean = false
  loading: boolean = false
  selectedFiles: any;
  currentFileUpload: any;
  allimg: any;
  dataloaded: boolean = true;
  numbers: any;
  constructor(private singleservice: MulterService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getsingleimg();
    this.numbers = Array(16).fill(4);
  }

  imguploadform = new FormGroup({
    img: new FormControl('', Validators.required)
  });

  file = null;
  onChange(event: any) { this.file = event.target.files[0]; }

  onSubmit() {

    // this.loading = true
    // this.hidebutton = true
    this.submitted = true;
    if (this.imguploadform.invalid) {
      return;
    }

    let body = {
      formfile: this.file
    }

    // var formData = new FormData();

    // console.log(formData.get("file"));
    this.singleservice.singleimginsert(body).subscribe(
      res => {
        this.getsingleimg();
        this.toastr.success('Success', 'Image Successfully Added!!');
      }
    )



  }

  getsingleimg() {
    this.dataloaded = true
    this.singleservice.allsingleimgget().subscribe(
      res => {
        // console.log(res);
        this.allimg = res
        this.dataloaded = false
      }
    )
  }


}
