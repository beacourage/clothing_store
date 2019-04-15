# Beatrice Courage - Responsive Website for Clothing Retailer

This simple clothing website was built using Javascript and HTML/CSS. I was initially going to build it in Ruby on Rails, however, I decided that Javascript would be the most appropriate for the given task. Javascript is a programming language that I enjoy and would like to improve on, and I therefore took the decision to challenge myself.  
Throughout this challenge, I followed a strict process for problem solving and debugging. I enjoyed breaking down the problem and harnessing the power of Google!

## Getting Started

1. Clone this repository `git clone git@github.com:beacourage/clothing_store.git`
2. Change into directory `cd clothing_store`
4. Run the web app `open -a "Google Chrome" index.html`
5. Run tests with the testing framework Jasmine `open -a "Google Chrome" SpecRunner.html`

## Testing

* A strict Test Driven Development process was used throughout
* Program consists of 19 tests - all tests passing
* Each test has a clear test description
* Testing framework - Jasmine
* TDD approach - 'Red Green Refactor' loop. This involves first writing a failing test, and then producing a minimum amount of code to pass that test.

## Design

* Program consists of three separate classes that can be reasonably justified - Cart, IndividualProduct and Store.
* All methods are fewer than 7 lines
* All classes are fewer than 55 lines

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

## Technologies used

Tech | Description
------------- | -------------
[Javascript](https://www.javascript.com/) | Main language used
[Jasmine](https://jasmine.github.io) | Javascript testing framework
[Bootstrap](http://getbootstrap.com) | Bootstrap
[Trello](https://trello.com/) | Tracking and organising workflow

## Contributors

This app was built with contributions from
* [Beatrice Courage](https://github.com/beacourage)
