import _ from 'lodash';

export function populateTable(data) {
  const table = document.getElementById('table_body');
  _.forEach(data, (tuple) => {
    const row = table.insertRow(0);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    cell1.innerHTML = tuple.rank;
    cell2.innerHTML = tuple.firstName;
    cell3.innerHTML = tuple.lastName;
    cell4.innerHTML = tuple.airport;
    cell5.innerHTML = tuple.price;
  });
}
