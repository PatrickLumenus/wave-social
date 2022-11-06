import { Component, For } from 'solid-js';
import FooterLink, { FooterLinkData } from './FooterLink';

export interface FooterLinkGroupInfo {
    title: string;
    links: FooterLinkData[]
}

const FooterLinkGroup: Component<FooterLinkGroupInfo> = (props) => {

    return (
        <div class="">
            <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase">{props.title}</h2>
            <ul class="text-gray-700 text-sm font-medium">
                <For each={props.links}>{(link) => {
                    return <li class = 'mb-4'>
                        <FooterLink text={link.text.trim()} url={link.url.trim()}/>
                    </li>
                }}</For>
            </ul>
        </div>
    );
}

export default FooterLinkGroup;