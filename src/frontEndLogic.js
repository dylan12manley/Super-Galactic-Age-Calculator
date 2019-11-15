import { calculator } from './../src/calculator.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('*call*relevent*form*here').submit(function(event) {
    event.preventDefault();
  });
});
