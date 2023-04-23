import { FASTElement, attr, customElement, html } from "@microsoft/fast-element";

@customElement({
    name: 'c-greeting',
    template: html`
        <span>Hello, ${x => x.name}</span>
    `,
})
export class Greeting extends FASTElement {
    @attr({ mode: "fromView" }) name: string = "World";
}