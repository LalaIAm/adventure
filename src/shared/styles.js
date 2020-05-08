import { css } from 'styled-components';

//Global Style Variables
export const background = {

}

export const color = {
         //palette
         primary: '#286da8', //lapis lazuli
         secondary: '#cd5360', //dark terra cotta
         tertiary: '#b13d4e', // cafa au lait

         tealBlue: '#438496',
         mediumJungleGreen: '#26272f', //dark
         isabelline: '#f3f1ed', //white

         //Monochrome
         lightest: '#e9e9ea',
         light: '#bebec1',
         medLight: '#939397',
         medium: '#67686d',
         medDark: '#3c3d44',
         ltDark: '#26272f',
         dark: '#22232a',

         // Status
       };

export const spacing = {
    padding: {
        small: 10,
        medium: 20,
        large: 30,
    },
    borderRadius: {
        small: 10,
        default: 15,
    }
};

export const typography = {
    type: {
        title: 'Euphoria Script',
        heading: 'Neuton',
        body: 'Amiko'
    },
    weight: {
        light: '200',
        regular: '400',
        bold: '700',
        black: '900'
    },
    size: {
        s1: '14',
        s2: '16',
        s: '18',
        m1: '22',
        m2: '26',
        m: '28',
        l1: '32',
        l2: '38',
        l: '42',
        title: '58'
    },
};

export const breakpoint = 600;

export const pageMargin = '5.55555';

export const pageMargins = css`
    padding: 0 ${spacing.padding.medium}px;
    @media(min-width: ${breakpoint * 1}px){
        margin: 0 ${pageMargin * 1}%
    }
`