import { Component, Input } from "@angular/core";

@Component({
    selector: "app-prova",
    templateUrl: './prova.component.html',
    styleUrls: ['./prova.component.scss'],
})
export class ProvaComponent {
    @Input() nomi: string[] = [];
    @Input() numeri: number[] = [];
        constructor() {}
}