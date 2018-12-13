import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../hero.service";

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
    hero: Hero;

    constructor(
        private route: ActivatedRoute,
        private heroService: HeroService,
        //private _location: Location
    ) {
    }

    ngOnInit() {
        this.getHero()
    }


    private getHero(): void {
        //the + convert strings to number, we use that here because route parameters are always strings and we need to extract a numerical id.
        const id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id).subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        //this.location.origin;
    }
}
