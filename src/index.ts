import { FASTElement, attr, customElement, html } from "@microsoft/fast-element";
import "./component/greeting";

@customElement({
    name: 'my-app',
    template: html<MyApp>`
        <c-greeting name="Sophie"></c-greeting>
    `,
})
export class MyApp extends FASTElement {
}