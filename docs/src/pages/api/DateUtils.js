import React from 'react';

import CodeBlock from '../../ui/CodeBlock';
import DocPage from '../../containers/DocPage';
import ApiDocs from '../../containers/ApiDocs';

export default () => (
  <DocPage title="DateUtils API">
    <p>Set of functions useful to work with dates and modifiers.</p>
    <CodeBlock>{`import { DateUtils } from "react-day-picker";`}</CodeBlock>
    <hr />

    <ApiDocs>
      <h2>Functions</h2>
      <h3 id="addDayToRange">
        addDayToRange{' '}
        <code>
          (day: Date, range: ?Object&lt;from: ?Date, to: ?Date&gt;) ⇒
          Object&lt;from: ?Date, to: ?Date&gt;
        </code>
      </h3>
      <p>
        Add <code>day</code> to a range of days, returning a new range including
        that day. A range is an object with <code>from</code> and{' '}
        <code>to</code> keys. See the range example for an example using this
        function.
      </p>
      <CodeBlock>{`import { DateUtils } from "react-day-picker";

const range = {
  from: new Date(2015, 5, 14),
  to: new Date(2015, 5, 18)
}
const newRange = DateUtils.addDayToRange(new Date(2015, 5, 24), range);

console.log(newRange.from) // 2015-05-24`}</CodeBlock>

      <h3 id="addMonths">
        addMonths <code>(date: Date, n: Number) ⇒ Date</code>
      </h3>
      <p>
        Return <code>date</code> as a new Date with <code>n</code> months added.
        Missing days will be added to the final date, e.g.{' '}
        <code>2016-03-31 + 1 month = 2016-05-01</code> (since the 31th of April
        is missing).
      </p>

      <h3 id="clone">
        clone <code>(date: date) ⇒ Date</code>
      </h3>
      <p>
        Clone <code>date</code> returning a new Date with the same time.
      </p>

      <h3 id="isDayAfter">
        isDayAfter <code>(day1: ?Date, day2: ?Date) ⇒ Boolean</code>
      </h3>
      <p>
        Return <code>true</code> if <code>day1</code> is after <code>day2</code>.
      </p>

      <h3 id="isDayBefore">
        isDayBefore <code>(day1: ?Date, day2: ?Date) ⇒ Boolean</code>
      </h3>
      <p>
        Return <code>true</code> if <code>day1</code> is before{' '}
        <code>day2</code>.
      </p>

      <h3 id="isDayBetween">
        isDayBetween <code>(day: Date, day1: Date, day2: Date) ⇒ Boolean</code>
      </h3>
      <p>
        Returns <code>true</code> if <code>day</code> is between{' '}
        <code>day1</code> and <code>day2</code>, without including those days.
      </p>

      <h3 id="isDayInRange">
        isDayInRange{' '}
        <code>
          (day: Date, range: Object&lt;from: ?Date, to: ?Date&gt;) ⇒ Boolean
        </code>
      </h3>
      <p>
        Returns <code>true</code> if <code>day</code> is included in the
        specified range of days.
      </p>

      <h3 id="isFutureDay">
        isFutureDay <code>(day: Date) ⇒ Boolean</code>
      </h3>
      <p>
        Return <code>true</code> if <code>day</code> is in the future, i.e. is
        tomorrow or any day after tomorrow.
      </p>

      <h3 id="isPastDay">
        isPastDay <code>(day: Date) ⇒ Boolean</code>
      </h3>
      <p>
        Return <code>true</code> if <code>day</code> is in the past, i.e. is
        yesterday or any day before yesterday.
      </p>

      <h3 id="isSameDay">
        isSameDay <code>(day1: ?Date, day2: ?Date) ⇒ Boolean</code>
      </h3>
      <p>
        Return <code>true</code> if <code>day1</code> and
        <code>day2</code> are the same day.
      </p>
    </ApiDocs>
  </DocPage>
);