# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @luongtanphat/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: returns the first element of the array.
* `tail(arr)`: returns all the elements after the head's of the array.
* `middle(arr)`: returns middle element of the array.
* `countLetter(string)`: count how many time of each letter appears in the string.
* `countOnly(arr, element)`: count how many time the element appears in the array.
* `findKey(object, callback)`: returns the first object that contains an object having the value.
* `findKeyByValue(object, value)`:  returns the key of the value.
* `flatten(arr)`: flatten an array.
* `letterPositions(sentance)`: returns the positions of each character.
* `map(array, callback)`: iterate the array.
* `takeUntil(array, callback)`: returns an array that has all element before the specific element.
* `without(arr1, arr2)`: return the arrays that contains the elements in arr1 but not in the arr2.