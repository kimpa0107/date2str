## Convert Date to string


### Usages

```javascript
const { dateToString } = require('@kimpa0107/date2str');

const date = new Date();
const res = dateToString(date, 'YYYY-MM-DD HH:mm:ss');

console.log(res);
```

### Format

year: `YYYY`
month: `MM`
day: `DD`
hour: `HH`
minute: `mm`
second: `ss`
