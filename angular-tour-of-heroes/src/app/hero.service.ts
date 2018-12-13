import {Injectable} from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    private heroesUrl = 'api/heroes'; //URL TO WEB API

    constructor(
        private http: HttpClient,
        private messageService: MessageService) {
    }

    // getHeroes(): Observable<Hero[]> {
    //     // TODO: send the message _after_ fetching the heroes
    //     this.messageService.addd('HeroService: fetched heroes');
    //     return of(HEROES);
    //     //comentario
    // }
    private log(message:string){
        this.messageService.addd(`HeroService:${message}`);
    }

    getHeroes(): Observable<Hero[]>{
        return this.http.get<Hero[]>(this.heroesUrl);
    }

    getHero(id: number): Observable<Hero> {
        //TODO: send the message _after_ fetching the hero
        this.messageService.addd(`HeroService:fetched hero id=${id}`);
        return of(HEROES.find(hero=>hero.id===id))
    }

}
