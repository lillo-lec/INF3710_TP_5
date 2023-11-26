// À DÉCOMMENTER ET À UTILISER LORSQUE VOTRE COMMUNICATION EST IMPLÉMENTÉE
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, catchError, of } from "rxjs";
import { Message } from "/Users/lillo/Desktop/INF3710_TP_5/common/communication/message";
import { Medecin } from "/Users/lillo/Desktop/INF3710_TP_5/common/medecin";

@Injectable()
export class CommunicationService {
  // À DÉCOMMENTER ET À UTILISER LORSQUE VOTRE COMMUNICATION EST IMPLÉMENTÉE
  private readonly BASE_URL: string = "http://localhost:3000/database";
  public constructor(private readonly http: HttpClient) {}

  private _listeners: any = new Subject<any>();

  listen(): Observable<any> {
    return this._listeners.asObservable();
  }

  filter(filterBy: string): void {
    this._listeners.next(filterBy);
  }

  // À DÉCOMMENTER ET À UTILISER LORSQUE VOTRE COMMUNICATION EST IMPLÉMENTÉE
  private handleError<T>(
    request: string,
    result?: T
  ): (error: Error) => Observable<T> {
    return (error: Error): Observable<T> => {
      return of(result as T);
    };
  }

  
 getAllMedecin(): Observable<Medecin[]> {
  return this.http.get<Medecin[]>(`${this.BASE_URL}/display`);
}

insertMedecin(medecin: Medecin): Observable<Message> {
    return this.http
        .post<Message>(`${this.BASE_URL}/insert`, medecin)
        .pipe(catchError(this.handleError<Message>('insertMedecin')));
}

modifyMedecin(medecin: Medecin): Observable<Message> {
  return this.http
      .put<Message>(`${this.BASE_URL}/modify`, medecin)
      .pipe(catchError(this.handleError<Message>('modifyMedecin')));
}

deleteMedecin(idMedecin: number) {
  return this.http
      .delete<Message>(`${this.BASE_URL}/delete/${idMedecin}`)
      .pipe(catchError(this.handleError<Message>('deleteMedecin')));
}

}
