import { User } from './../src/User.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#ageForm').submit(function(event) {
    event.preventDefault();
    const userAge = $('input#ageInput').val();
    const userLife = $('input#lifeInput').val();
    let myUser = new User(userAge, userLife, 0, 0, 0, 0, 0, 0, 0)
    myUser.inputChecker();
    myUser.getLifeLeft();
    myUser.getMercuryAge();
    myUser.getMercuryLife();
    myUser.getVenusAge();
    myUser.getVenusLife();
    myUser.getMarsAge();
    myUser.getMarsLife();
    myUser.getJuipterAge();
    myUser.getJuipterLife();
    console.log(myUser);
    $('#results').text(`Your Earth age is ${myUser.age}`);
    $('#results').text(`The expected amount of years before you die is ${myUser.lifeLeft}`);
    $('#results').text(`On Mercury, you would be ${myUser.mercuryAge} years old`);
    // if (myUser.mercuryLife > 0){
    //   $('#results').text(`On Mercury, you would be ${myUser.mercuryAge} years old`)
    // } else if (mysUser.mercuryLife < 0){
    //   $('#restlts').text(myUser.mercuryLife);
    // };

  });
});
