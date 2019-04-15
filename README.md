<h1 align="center">Responsive Website for a Clothing Retailer</h1>

This simple clothing website was built using Javascript, HTML and CSS. I was initially going to build it in Ruby on Rails, however, I decided that Javascript would be the most appropriate for the given task. I chose Javascript as it is a programming language that I enjoy and would like to improve on, and I therefore took the decision to challenge myself.  Throughout this challenge, I followed a strict process for problem solving and debugging. I enjoyed breaking down the problem and harnessing the power of Google!

## Getting Started

1. Clone this repository `git clone git@github.com:beacourage/clothing_store.git`
2. Change into directory `cd clothing_store`
4. Run the web app `open -a "Google Chrome" index.html`
5. Run tests with the testing framework Jasmine `open -a "Google Chrome" SpecRunner.html`

## Testing

* A strict Test Driven Development process was used throughout. I followed a strict red, green, refactor cycle throughout this challenge - writing one test followed by a minimum amount of code to make it pass, and subsequently refactoring. My stringent TDD process is demonstrated through my commit history whereby  each commit reflects one cycle of the red green refactor cycle. Each passing test is accompanied by a commit who’s message is both clear and concise.
* The testing framework used is Jasmine, and my program consists of 19 tests with all of the tests passing. Each test has a clear description and my code is thoroughly tested.  
* TDD approach - 'Red Green Refactor' loop.
* Bellow shows all the passing tests:

![Screenshot](Screenshot_tests.png)

## Design

* My program consists of three separate classes that can be reasonably justified - Cart, IndividualProduct and Store. I have followed the Single Responsibility Principle whereby each class does more or less one thing. By initializing a new instance of the Cart class in my Store class, I was able to call Cart methods on any new instances of the store class.
* I ensured that none of my classes were coupled to their dependencies and in each class, the dependencies are passed in as arguments to the constructor. Having dependency injections allows my code to be reusable or tested independently, the code works totally by itself.
* In order to keep my code as clean and DRY as possible, I ensured that all methods where fewer than seven lines and all classes were fewer than fifty five lines.


## Prioritised User Stories

The user stories formed part of the development test criteria. Six out of the eight user stories were completed, and given more time, I would have tackled the task of applying discount vouchers that can be redeemed. I would have created a new class called Voucher and included the logic within this class.

```
As a user,
So that I can see the items in the shop,
I can view the products and their category, price and availability information.

As a user,
So that I can buy an item of clothing,
I can add a product to my shopping cart.

As a user,
So that I can change my mind on an item of clothing,
I can remove a product from my shopping cart.

As a user,
So that I can see how much money,
I can view the total price for the products in my shopping cart.

As a user,
So that I can user my voucher,
I can apply a voucher to my shopping cart.

As a user,
So that I can see the final price,
I can view the total price for the products in my shopping cart  with discounts applied.

As a user,
So that I know I'm using the correct voucher,
I am alerted when I apply an invalid voucher to my shopping cart.

As a user,
So that I only buy items that are in stock,
I am unable to put Out of Stock products in the shopping cart.
```

## Running the app from a users perspective

* A strict Test Driven Development process was used throughout. I followed a strict red, green, refactor cycle throughout this challenge - writing one test follo


## Technologies used

Tech | Description
------------- | -------------
[Javascript](https://www.javascript.com/) | Main language used
[Jasmine](https://jasmine.github.io) | Javascript testing framework
[HTML5](https://www.w3schools.com/html/default.asp) | Hypertext Markup Language
[CSS](https://www.w3schools.com/css/) | Cascading Style Sheets
[Bootstrap](http://getbootstrap.com) | Bootstrap Framework, for basic front end
[Trello](https://trello.com/) | Tracking and organising workflow
[Google](https://www.google.co.uk/) | Internet-related services and products

## Contributors

This app was built with contributions from myself:
* [Beatrice Courage](https://github.com/beacourage)
