import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MulterService {
  readonly baseurl = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  singleimginsert(body: any) {
    let formData = new FormData();
    formData.append('img', body.formfile);
    return this.http.post(this.baseurl + 'image/single-image', formData);
  }

  allsingleimgget() {
    return this.http.get(this.baseurl + 'image/getallsingleimg');
  }

  getsingleimg(id: any) {
    return this.http.get(this.baseurl + 'image/getsingleimg/' + id);
  }

  // multiple-image

  multipleimginsert(body: any) {
    let formData = new FormData();
    for (var i = 0; i < body.formfile.length; i++) { 
      formData.append("img", body.formfile[i]);
    }
    return this.http.post(this.baseurl + 'image/multiple-image', formData);
  }

  multipleimggetall() {
    return this.http.get(this.baseurl + 'image/multipleimggetall');
  }
}
