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
  });
});
