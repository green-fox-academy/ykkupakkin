'use strict';

class PostIt {
    backgroundColor: string;
    text: string;
    textColor: string;
  
    constructor(backgroundColor: string, text: string, textColor: string) {
      this.backgroundColor = backgroundColor;
      this.text = text;
      this.textColor = textColor;
    }

  }
  
//   an orange with blue text: "Idea 1"
//   a pink with black text: "Awesome"
//   a yellow with green text: "Superb!"

  let i1 = new PostIt("orange", "Idea1", "blue");
  let i2 = new PostIt("pink", "Awesome", "black");
  let i3 = new PostIt("yellow", "Superb", "green");

  console.log(i1, i2, i3);
    

