'use strict';
module.exports = input => {
	if (typeof input !== 'string') {
		throw new TypeError(`date-components expected a string, got ${typeof input}`);
	}
	const date = new Date(input);

	return {
		day: date.getDate(),
		weekday: date.getDay(),
		month: date.getMonth(),
		year: date.getFullYear(),
		hour: date.getHours(),
		minutes: date.getMinutes(),
		seconds: date.getSeconds(),
		milliseconds: date.getMilliseconds(),
		epoch: date.getTime(),
		dateString: input
	};
};
