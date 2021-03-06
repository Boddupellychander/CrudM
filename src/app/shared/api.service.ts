import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) { }

  postEmployee(data: any) {
    return this.http.post<any>(`${this.url}`, data)
      .pipe(map((res: any) => {
        return res;
      }));
  }

  getEmployees() {
    return this.http.get<any>(`${this.url}`)
      .pipe(map((res: any) => {
        return res;
      }));
  }
  deleteEmployee(id : number){
    return this.http.delete<any>(`${this.url}/${id}`)
    .pipe(map((res:any)=>{
      return res;
    }));
  }


}




