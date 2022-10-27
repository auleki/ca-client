import * as IoIcons from 'react-icons/io5'

export const styleColors = {
    orange: '#F36B2B',
    green: '#43a047',
    black: '#1a1a1a',
    lightBlack: '#242424',
    white: '#fff',
    gray: '#E9E9E9',
    red: '#FF2626',
    cardBg: "#212121",
    purple: '#542e71'
}

export const fonts = {
    main: 'Signika',
    primary: 'Limelight',
    secondary: '',
    workSans: 'Work Sans',
    bitter: 'Bitter'
}

export const icons = {
    plus: <IoIcons.IoAdd />,
    back: <IoIcons.IoChevronBack />,
    create: <IoIcons.IoAddSharp />
}

export const questionList = [
    {
        questionText:
            '__________ is a general term referring to actual objects related to the human body?',
        answerOptions: [
            { answerText: 'Costume', isCorrect: false },
            { answerText: 'Wardrobe', isCorrect: false },
            { answerText: 'Clothing', isCorrect: true },
            { answerText: 'Wear Ability', isCorrect: false }
        ]
    },
    {
        questionText:
            'Ritu Kumar was one of the earliest pioneers of fashion with extensive research in to block prints and innovative application of the technique of ________',
        answerOptions: [
            { answerText: 'Phulkari', isCorrect: false },
            { answerText: 'Mirror Work', isCorrect: false },
            { answerText: 'Zardosiembroidery', isCorrect: true },
            { answerText: 'Dye-Prints', isCorrect: false }
        ]
    },
    {
        questionText: '__________ is more than just clothing ?',
        answerOptions: [
            { answerText: 'Apparel', isCorrect: false },
            { answerText: 'Garment', isCorrect: false },
            { answerText: 'Clothing', isCorrect: false },
            { answerText: 'Fashion', isCorrect: true }
        ]
    },
    {
        questionText:
            'Historians have propounded 4 different explanations regarding factors affecting clothing ?',
        answerOptions: [
            { answerText: 'Protection', isCorrect: false },
            { answerText: 'Rituals', isCorrect: false },
            { answerText: 'Identification', isCorrect: false },
            { answerText: 'All Of The Above', isCorrect: true }
        ]
    },
    {
        questionText:
            '________ and _________ are also indicating of the social and marital status of women ?',
        answerOptions: [
            { answerText: 'Dress and Ornaments', isCorrect: true },
            { answerText: 'Sindoor', isCorrect: false },
            { answerText: 'Black Scarf', isCorrect: false },
            { answerText: 'Mangalsutra', isCorrect: false }
        ]
    },
    {
        questionText:
            'In India, the coloured powder put in the hair parting is called _______ is a visual indicator of married status of women ?',
        answerOptions: [
            { answerText: 'Sandal Powder', isCorrect: false },
            { answerText: 'Sindoor Powder', isCorrect: true },
            { answerText: 'Perfume', isCorrect: false },
            { answerText: 'Tumeric', isCorrect: false }
        ]
    },
    {
        questionText:
            'From the late 19th century a dust coloured light weight cotton fabric is called _______ was used by the Indian Army during the British Raj ?',
        answerOptions: [
            { answerText: 'Poplin', isCorrect: false },
            { answerText: 'Khaki', isCorrect: true },
            { answerText: 'Silk', isCorrect: false },
            { answerText: 'Polyester', isCorrect: false }
        ]
    },
    {
        questionText:
            '_________ waist belted, tucked or slashed to give excessive looseness to give comfort to the wearer ?',
        answerOptions: [
            { answerText: 'Phyjama', isCorrect: false },
            { answerText: 'Flat Front', isCorrect: false },
            { answerText: 'Churida', isCorrect: false },
            { answerText: 'Patiala Salwar', isCorrect: true }
        ]
    },
    {
        questionText: '__________ draped lower garment for men and women ?',
        answerOptions: [
            { answerText: 'Angarkha', isCorrect: false },
            { answerText: 'Flat-front', isCorrect: false },
            { answerText: 'Antariya', isCorrect: true },
            { answerText: 'Patiala Salwar', isCorrect: false }
        ]
    },
    {
        questionText:
            '__________ French term for exclusive one-of-kind high fashion ?',
        answerOptions: [
            { answerText: 'Bespoke-shop', isCorrect: false },
            { answerText: "Haute Coutre's", isCorrect: true },
            { answerText: 'Boutique', isCorrect: false },
            { answerText: 'Showroom', isCorrect: false }
        ]
    },
    {
        questionText:
            '_______ is the process of transforming a design into its constituent flat pattern pieces and then drafting them out ?',
        answerOptions: [
            { answerText: 'Pattern Making', isCorrect: true },
            { answerText: 'Draping', isCorrect: false },
            { answerText: 'Template', isCorrect: false },
            { answerText: 'Blocks', isCorrect: false }
        ]
    },
    {
        questionText: 'The highest point on the bust is __________ ?',
        answerOptions: [
            { answerText: 'Gorge-point', isCorrect: false },
            { answerText: 'Pleat', isCorrect: false },
            { answerText: 'Dart', isCorrect: false },
            { answerText: 'Apex', isCorrect: true }
        ]
    },
    {
        questionText: '_______ refers to the amount of roominess in a garment ?',
        answerOptions: [
            { answerText: 'Grain line', isCorrect: false },
            { answerText: 'Dart', isCorrect: false },
            { answerText: 'Ease', isCorrect: true },
            { answerText: 'Tuck', isCorrect: false }
        ]
    },
    {
        questionText:
            'One of the first ________ that is done on muslin at the time when the pattern is made ?',
        answerOptions: [
            { answerText: 'Fullness', isCorrect: false },
            { answerText: 'Test-fit', isCorrect: true },
            { answerText: 'Final', isCorrect: false },
            { answerText: 'Finishing', isCorrect: false }
        ]
    },
    {
        questionText:
            'Dart manipulation of the front bodice consists of _____ types ?',
        answerOptions: [
            { answerText: '13', isCorrect: true },
            { answerText: '4', isCorrect: false },
            { answerText: '6', isCorrect: false },
            { answerText: '8', isCorrect: false }
        ]
    },
    {
        questionText:
            '________ is the dress fitted through the bodice, waist, and hips, and flaring out from the knees ?',
        answerOptions: [
            { answerText: 'Empire', isCorrect: false },
            { answerText: 'Mermaid', isCorrect: true },
            { answerText: 'Ball Gown', isCorrect: false },
            { answerText: 'A-line', isCorrect: false }
        ]
    },
    {
        questionText: 'A straight, form fitting silhouette is _______ ?',
        answerOptions: [
            { answerText: 'Trumpet', isCorrect: false },
            { answerText: 'Mermaid', isCorrect: false },
            { answerText: 'Sheath', isCorrect: true },
            { answerText: 'Tulip', isCorrect: false }
        ]
    },
    {
        questionText:
            '__________ is a high neck line that cuts straight across the collar bone ?',
        answerOptions: [
            { answerText: 'Jewel', isCorrect: false },
            { answerText: 'Cowl Neck', isCorrect: false },
            { answerText: 'Scoop', isCorrect: false },
            { answerText: 'Boat Neck', isCorrect: true }
        ]
    },
    {
        questionText:
            'A sleeve cut wide at the armhole and tapering to the wrist is _________ ?',
        answerOptions: [
            { answerText: 'Dolman sleeve', isCorrect: true },
            { answerText: 'Puff sleeve', isCorrect: false },
            { answerText: 'Plain sleeve', isCorrect: false },
            { answerText: 'Tulip sleeve', isCorrect: false }
        ]
    },
    {
        questionText:
            ' _______ hugs tight against the body with hook, snap or laced back securing ?',
        answerOptions: [
            { answerText: 'Midriff', isCorrect: false },
            { answerText: 'Empire', isCorrect: false },
            { answerText: 'Surplice', isCorrect: false },
            { answerText: 'Corset', isCorrect: true }
        ]
    },
    {
        questionText:
            'A sheer soft knit fabric, most often 100% cotton as an informal fabric at weddings ?',
        answerOptions: [
            { answerText: 'Moire', isCorrect: false },
            { answerText: 'Organdie', isCorrect: false },
            { answerText: 'Jersey', isCorrect: true },
            { answerText: 'Organza', isCorrect: false }
        ]
    },
    {
        questionText: '_______ is the thicker fabric ribbing in the weave ?',
        answerOptions: [
            { answerText: 'Taffeta', isCorrect: true },
            { answerText: 'Tulle', isCorrect: false },
            { answerText: 'Laces', isCorrect: false },
            { answerText: 'Velvet', isCorrect: false }
        ]
    },
    {
        questionText: 'The hem falls right above the ankles ?',
        answerOptions: [
            { answerText: 'Mini', isCorrect: false },
            { answerText: 'Floor', isCorrect: false },
            { answerText: 'Ballerina', isCorrect: true },
            { answerText: 'Street', isCorrect: false }
        ]
    },
    {
        questionText:
            '________ is smooth, heavy and shin, long honoured bridal fibre ?',
        answerOptions: [
            { answerText: 'Satin', isCorrect: true },
            { answerText: 'Chantily', isCorrect: false },
            { answerText: 'Trulle', isCorrect: false },
            { answerText: 'Crepe', isCorrect: false }
        ]
    },
    {
        questionText: 'What date was Check Adigs website launched ?',
        answerOptions: [
            { answerText: '7th of August 2020', isCorrect: false },
            { answerText: '5th of June 2020', isCorrect: false },
            { answerText: '10th of August 2020', isCorrect: true },
            { answerText: '21st November 2020', isCorrect: false }
        ]
    },
    {
        questionText:
            'Check Adigs – Elegeance is not standing out but being ______ ?',
        answerOptions: [
            { answerText: 'Remembered', isCorrect: true },
            { answerText: 'Unique', isCorrect: false },
            { answerText: 'Exempted', isCorrect: false },
            { answerText: 'Gallant', isCorrect: false }
        ]
    },
    {
        questionText: 'Style is more about being _______ ?',
        answerOptions: [
            { answerText: 'Beautiful', isCorrect: false },
            { answerText: 'Cute', isCorrect: false },
            { answerText: 'Yourself', isCorrect: true },
            { answerText: 'Generous', isCorrect: false }
        ]
    },
    {
        questionText: 'What is the call line for Check Adigs ?',
        answerOptions: [
            { answerText: '08130267643', isCorrect: true },
            { answerText: '08065843658', isCorrect: false },
            { answerText: '0815243019', isCorrect: false },
            { answerText: '09044577875', isCorrect: false }
        ]
    },
    {
        questionText:
            'What is the name of a long piece of cloth worn by women over the shoulder ?',
        answerOptions: [
            { answerText: 'Laid', isCorrect: true },
            { answerText: 'Granville', isCorrect: false },
            { answerText: 'Plaid', isCorrect: false },
            { answerText: 'Sooth', isCorrect: false }
        ]
    },
    {
        questionText:
            'What do you mean by Camlet also commonly known as Camelot or camblet in the fashion industry ?',
        answerOptions: [
            { answerText: 'The helmet on the king’s head', isCorrect: false },
            {
                answerText: 'The material in making the king’s cloth',
                isCorrect: false
            },
            { answerText: 'The waterproof cloth of camel’s hair', isCorrect: true },
            {
                answerText: 'The material in making the slave’s cloth',
                isCorrect: false
            }
        ]
    },
    {
        questionText:
            'Who drafts the shapes and sizes of a garment’s pieces with paper and measuring tools ?',
        answerOptions: [
            { answerText: 'Stylist', isCorrect: false },
            { answerText: 'Textile Designer', isCorrect: false },
            { answerText: 'Pattern Maker', isCorrect: true },
            { answerText: 'Tailor', isCorrect: false }
        ]
    },
    {
        questionText: 'What is the name of strong shiny cotton ?',
        answerOptions: [
            { answerText: 'Poplin', isCorrect: true },
            { answerText: 'Violin', isCorrect: false },
            { answerText: 'Foflin', isCorrect: false },
            { answerText: 'Shint', isCorrect: false }
        ]
    },
    {
        questionText: 'What is the colour of aquamarine, a precious stone ?',
        answerOptions: [
            { answerText: 'Bluish Green', isCorrect: true },
            { answerText: 'Pinkish', isCorrect: false },
            { answerText: 'Greenish', isCorrect: false },
            { answerText: 'Greenish Blue', isCorrect: false }
        ]
    },
    {
        questionText: 'What is the name of the garment having a front opening ?',
        answerOptions: [
            { answerText: 'Polero', isCorrect: false },
            { answerText: 'Folero', isCorrect: false },
            { answerText: 'Bolero', isCorrect: true },
            { answerText: 'Dolero', isCorrect: false }
        ]
    },
    {
        questionText: 'Fedora lies in which category of accessories ?',
        answerOptions: [
            { answerText: 'A kind of cap', isCorrect: true },
            { answerText: 'A kind of feather', isCorrect: false },
            { answerText: 'A kind of clothing material', isCorrect: false },
            { answerText: 'A kind of weather', isCorrect: false }
        ]
    },
    {
        questionText:
            'Which of the following is suitable for making evening gown ?',
        answerOptions: [
            { answerText: 'Satin', isCorrect: true },
            { answerText: 'Flannel', isCorrect: false },
            { answerText: 'Garbadine', isCorrect: false },
            { answerText: 'Silk tweet', isCorrect: false }
        ]
    },
    {
        questionText: 'A celebrity fashion designer from Florida born in Italy ?',
        answerOptions: [
            { answerText: 'Christian Dior', isCorrect: false },
            { answerText: 'Gianni Versace', isCorrect: true },
            { answerText: 'Giuseppi Zanotti', isCorrect: false },
            { answerText: 'Kanye West', isCorrect: false }
        ]
    }
]
