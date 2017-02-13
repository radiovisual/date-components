import test from 'ava';
import fn from './';

test('expect a string', t => {
	t.throws(() => {
		fn();
	}, 'date-components expected a string, got undefined');
});

test('gets date components', t => {
	const dateString = 'Mon Feb 13 2017 13:37:38:09 GMT+0000 (WET)';
	const components = fn(dateString);

	t.is(components.day, 13);
	t.is(components.weekday, 1);
	t.is(components.month, 1);
	t.is(components.year, 2017);
	t.is(components.hour, 13);
	t.is(components.minutes, 37);
	t.is(components.seconds, 38);
	t.is(components.milliseconds, 9);
	t.is(components.epoch, 1486993058009);
	t.is(components.dateString, dateString);
});

test('supports short date formats', t => {
	const dateString = 'Mon Feb 13 2017';
	const components = fn(dateString);

	t.is(components.day, 13);
	t.is(components.weekday, 1);
	t.is(components.month, 1);
	t.is(components.year, 2017);
	t.is(components.hour, 0);
	t.is(components.minutes, 0);
	t.is(components.seconds, 0);
	t.is(components.milliseconds, 0);
	t.is(components.epoch, 1486944000000);
	t.is(components.dateString, dateString);
});
