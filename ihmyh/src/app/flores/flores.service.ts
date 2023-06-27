import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FloresService {
  private floresUrl = 'assets/flores.json';

  getFlores(): Observable<any[]> {
    return new Observable<any[]>(observer => {
      fetch(this.floresUrl)
        .then(response => response.json())
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }
}
