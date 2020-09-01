import image from './assets/image.jpg'
import {TitleBlock, ImageBlock, TextBlock, TextColumnsBlock} from './classes/blocks'
import {css} from './utils'


export const model = [
    new TitleBlock('Шины и диски', {
        tag: 'h1',
        styles: css({
            'margin-bottom': '10px',
            background: 'linear-gradient(91.1deg, #9710E9 1.17%, #FD8D43 99.31%)',
            color: '#fff',
            'text-align': 'center'
        })
    }),
    new ImageBlock(image, {
        styles: 'padding: 2rem 0; display: flex; justify-content: center;',
        alt: 'my image',
        imageStyle: 'width: 100%; height: auto'
    }),
    new TextBlock('Нешипованные шины', {
        styles: 'margin-bottom: 10px; color: #48494D; font-weight: bold; font-size: 30px; line-height: 34px; text-align: center;'
    }),
    new TextColumnsBlock([
    'Шина 205/80 R16 104Q Misha RF Power Grum',
    'Шина 205/80 R16 114Q Misha RF Power Grum',
    'Шина 205/80 R16 142Q Misha RF Power Grum'
], {
    styles: 'font-size: 20px; line-height: 23px; text-align: center; color: #48494D;'
})
]