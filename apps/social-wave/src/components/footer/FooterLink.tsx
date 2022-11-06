import type { Component } from 'solid-js';

export interface FooterLinkData {
    url: string;
    text: string;
}

const FooterLink: Component<FooterLinkData> = (props) => {

    return <a href={props.url} class="hover:text-primary">{props.text}</a>
}

export default FooterLink;