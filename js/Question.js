class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Your Awnser here");
   //Create a input box to enter the number
    this.p1 = createElement('p');
    this.p2 = createElement('p');
    this.p3 = createElement('p');
    this.p4 = createElement('p');

    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)




    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    // this.message.hide();
    //Add hide() for questions, options & input box





  }

  display(){
    this.title.html("MyQuiz Game. what is my favourite language?");
    this.title.position(350, 0);


    this.p1.html("a. python")
    this.p1.position(150, 130);

    this.p2.html("b. node-js")
    this.p2.position(150, 150);

    this.p3.html("c. french")
    this.p3.position(150, 170);

    this.p4.html("d. idk");
    this.p4.position(150, 190);


    //Create html() and position() for each question, input and answers.
    this.message.html("Submited.")
    this.message.hide();



    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
        this.message.show();
    })    


  }
}
