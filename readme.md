# date-components [![Build Status](https://travis-ci.org/radiovisual/date-components.svg?branch=master)](https://travis-ci.org/radiovisual/date-components)

> Extract individual date components from a Date String.


## Install

```
$ npm install --save date-components
```


## Usage

```js
const dateComponents = require('date-components');

const dateString = 'Mon Feb 13 2017 13:37:38:09 GMT+0000 (WET)';
const components = dateComponents(dateString);
```

Running `console.log(components)` from the above code sample would result in:

```
{
  day: 13,
  weekday: 1,
  month: 1,
  year: 2017,
  hour: 13,
  minutes: 37,
  seconds: 38,
  milliseconds: 9,
  epoch: 1486993058009,
  dateString: 'Mon Feb 13 2017 13:37:38:09 GMT+0000 (WET)'
}
```


## API

### dateComponents(input)

#### input

Type: `string`

Returns an object with the following keys:

| Key | Description |
| ------| ------------|
| day   | The day of the month (from 1-31) |
| weekday | The day of the week (from 0-6) |
| month    | The month (from 0-11) |
| year    | The full year |
| hour    | The hour (from 0-23) |
| minutes    | The minutes (from 0-59) |
| seconds    | The seconds (from 0-59) |
| milliseconds    | The milliseconds (from 0-999) |
| epoch    | Returns the number of milliseconds since midnight Jan 1 1970, and a specified date |
| dateString    | The original dateString value you passed to the function |


## License

MIT © [Michael Wuergler](http://numetriclabs.com)
