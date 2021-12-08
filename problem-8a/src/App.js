import React from 'react'; //import React library

const EXAMPLE_SENATORS = [  
  { id: 'C000127',  name: 'Maria Cantwell', state: 'WA',  party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */
export function App(props) {
  return (
    <div className="container">
      <h1>US Senators (Oct 2020)</h1>
      <SenatorTable senators={props.senators} />
    </div>
  );
}

export function SenatorTable(props) {
  let columnNamesArray = ['Name', 'State', 'Phone', 'Twitter'];

  let mappedSenators = props.senators.map(senators =>{
    return <SenatorRow senator={senators} key={senators.id} />
  });

  return (
    <table className="table table-bordered">
      <TableHeader columnNames={columnNamesArray} />
      <tbody>
        {mappedSenators}
      </tbody>
    </table>
  );
}

export function TableHeader(props) {
  let tableHeadings = props.columnNames.map(columnName => {
    return <th key={columnName}>{columnName}</th>;
  });
  
  return (
    <thead>
        <tr>
          {tableHeadings}
        </tr>
    </thead>
  );
}

export function SenatorRow(props) {
  let senator = props.senator;
  return (
    <tr>
      <td>{senator.name}</td>
      <td>{`${senator.party.charAt(0)} - ${senator.state}`}</td>
      <td>
        <a href={`tel:${senator.phone}`}>{senator.phone}</a>
      </td>
      <td>
        <a href={`https://twitter.com/${senator.twitter}`}>{`@${senator.twitter}`}</a>
      </td>
    </tr>
  )
}