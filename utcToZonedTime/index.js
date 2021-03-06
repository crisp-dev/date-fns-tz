"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = utcToZonedTime;

var _tzParseTimezone = _interopRequireDefault(require("../_lib/tzParseTimezone"));

var _subMilliseconds = _interopRequireDefault(require("date-fns/subMilliseconds"));

var _toDate = _interopRequireDefault(require("../toDate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name utcToZonedTime
 * @category Time Zone Helpers
 * @summary Get a date/time representing local time in a given time zone from the UTC date
 *
 * @description
 * Returns a date instance with values representing the local time in the time zone
 * specified of the UTC time from the date provided. In other words, when the new date
 * is formatted it will show the equivalent hours in the target time zone regardless
 * of the current system time zone.
 *
 * @param {Date|String|Number} date - the date with the relevant UTC time
 * @param {String} timeZone - the time zone to get local time for, can be an offset or IANA time zone
 * @param {OptionsWithTZ} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the equivalent time in the time zone
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // In June 10am UTC is 6am in New York (-04:00)
 * const result = utcToZonedTime('2014-06-25T10:00:00.000Z', 'America/New_York')
 * //=> Jun 25 2014 06:00:00
 */
function utcToZonedTime(dirtyDate, timeZone, options) {
  var date = (0, _toDate.default)(dirtyDate, options); // We just need to apply the offset indicated by the time zone to this localized date

  var offsetMilliseconds = (0, _tzParseTimezone.default)(timeZone, date);
  var zonedDate = offsetMilliseconds ? (0, _subMilliseconds.default)(date, offsetMilliseconds) : date; // This date has the UTC time values of the zoned date at the system time zone

  return new Date(zonedDate.getUTCFullYear(), zonedDate.getUTCMonth(), zonedDate.getUTCDate(), zonedDate.getUTCHours(), zonedDate.getUTCMinutes(), zonedDate.getUTCSeconds(), zonedDate.getUTCMilliseconds());
}

module.exports = exports.default;