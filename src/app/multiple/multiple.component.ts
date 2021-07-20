import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MulterService } from '../service/multer.service';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.css']
})
export class MultipleComponent implements OnInit {
  submitted: boolean = false;
  dataloaded: boolean = true;
  allimg: any;
  numbers: any;

  constructor(private singleservice: MulterService, private toastr: ToastrService, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.multipleimggetallget();
    this.numbers = Array(16).fill(4);
  }

  imguploadform = new FormGroup({
    img: new FormControl('', Validators.required)
  });

  myFiles: string[] = [];
  onChange(event: any) {
    for (var i = 0; i < event.target.files.length; i++) {
      this.myFiles.push(event.target.files[i]);
    }

  }

  onSubmit() {
    this.submitted = true;
    if (this.imguploadform.invalid) {
      return;
    }

    let body = {
      formfile: this.myFiles
    }
    console.log(body);
    this.singleservice.multipleimginsert(body).subscribe(
      res => {
        console.log(res);

        this.multipleimggetallget();
        this.toastr.success('Success', 'Image Successfully Added!!');
      }
    )



  }

  multipleimggetallget() {
    this.dataloaded = true
    this.singleservice.multipleimggetall().subscribe(
      res => {
        console.log(res);
        this.allimg = res
        this.dataloaded = false
      }
    )
  }

  // @HostListener('window:blur', ['$event'])
  // onWindowBlur(event: any): void {
  //   console.log('iframe clicked');
  // }


}
