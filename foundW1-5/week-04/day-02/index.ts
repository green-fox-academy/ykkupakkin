class Persson {
    height: number;
    name: string;
    age: number;
}

class Button {
    private width: number;
    private height: number;
    private color: string;

    print() {
        console.log('I\'m a button');
        console.log('Height: ' + this.height);
        console.log('Width: ' + this.width);

        // button doesn't have text
        // console.log(this.text);
    }

    constructor(height: number = 0, width: number = 0) {
        this.height = height;
        this.width = width;
        this.color = '#000000';
    }

    // setter method, we can set height in a controlled way
    setHeight(height: number) {
        if(height < 0) {
            throw 'Height must not be negative.';
        }

        this.height = height;
    }

    getHeight() {
        return this.height;
    }
}

class TextButton extends Button {

    // These properties are inherited
    // width: number;
    // height: number;
    // color: string;

    text: string;

    // method override
    print() {
        super.print();
        console.log(this.text);
    }

    constructor(height: number = 0, width: number = 0) {
        super(height, width);
        this.text = '';
    }
}

class IconButton extends Button {
    iconSrc: string;

    constructor(iconSrc: string) {
        super();
        this.iconSrc = iconSrc;
    }

    print() {
        super.print();
        console.log('Icon: ' + this.iconSrc);
    }
}


let button1 = new Button(15, 30);

button1.setHeight(15);

// console.log(button1.height);

button1.print();

let button2 = new TextButton(30, 60);

button2.text = 'Login';
button1.setHeight(25);

// console.log(button2.height);

button2.print();

let button3 = new IconButton('valami.png');

try {
    button1.setHeight(-2);
}
catch(error) {
    console.log(error);
}

button3.print();

console.log(button3.getHeight());

let szam: number;

szam = 5;
szam = '5.2' as any as number;

// button2 TextButton so this is not valid
// let another = button2 as IconButton;


// button2 TextButton so this is valid
let another2 = button2 as Button;


// not valid
// another2.text = 'hello';

let button: Button;

// Polymorphism
button = new IconButton('png');
button = new TextButton();

(button as TextButton).text = 'haho';

console.log((button as TextButton).text);

class Header {
    // heterogeneous collection
    buttons: Button[];

    print() {
        for(let button of this.buttons) {
            button.print();
        }
    }
}

let header = new Header();

header.buttons.push(new IconButton('ong'));
header.buttons.push(new IconButton('ong'));
header.buttons.push(new IconButton('ong'));
header.buttons.push(new TextButton());
header.buttons.push(new TextButton());