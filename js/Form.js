class Form {
  constructor() {

  }

  display() {
    var title = createElement('h2')
    title.html("Welcome!!!");
    title.position(160, 85);

    var input = createInput("Name: ");
    var button = createButton('Continue with the above name');


    input.position(140, 160);
    button.position(130, 185);

    button.mousePressed(function () {
      input.hide();
      button.hide();
      // (URL('entry/index.htm'))

      var name = input.value();

      playerCount += 1;
      player.update(name)
      player.updateCount(playerCount);
      var greeting = createElement('h3');
      greeting.html("Hello, " + name + ". Thank you for visiting! Please click on 'Proceed' link, located at the very top")
      greeting.position(70, 160)
      // var red = window.open(URL, ('entry/index.htm'))






    });

  }
}
