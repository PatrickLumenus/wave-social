import type { FooterLinkGroupInfo } from './components/footer/FooterLinkGroup';

// Site Info
export const siteName = 'Socialoc';
export const companyName = 'Four Fine Fellas';

// Social Links
export const dribbleLink: URL|null = null;
export const facebookLink: URL|null = null;
export const githubLink: URL|null = null;
export const instagramLink: URL|null = null;
export const twitterLink: URL|null = null;

// External Websites
export const openSourceWebsite: URL|null = null;

// Footer Links
export const siteFooterLinks: FooterLinkGroupInfo[] = [
    {
        title: 'Company',
        links: [
            { text: 'About', url: '/about' },
            { text: 'Contact', url: '/contact' },
        ]
    },
    {
        title: 'Legal',
        links: [
            { text: 'Terms of Service', url: '/tos'},
            { text: 'Privacy Policy', url: '/privacy' },
            { text: 'Cookies Policy', url: '/privacy/cookies' }
        ]
    }
]