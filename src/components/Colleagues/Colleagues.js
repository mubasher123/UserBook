import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Table} from 'antd';

// import Panel from '../Panel/Panel';

// import './Colleagues.css';

// const Colleague = ({ photo, name, nationality, email, country}) => (
//   <tr className="colleague">
//     <td>
//       <img className="colleague__photo" src={photo} alt={name} />
//     </td>
//     <td className="colleague__info">
//       <div className="colleague__name">{name}</div>
//       <div className="colleague__status">{nationality}</div>
//     </td>
//     <td className="colleague__info">
//       <div className="colleague__name">{email}</div>
//     </td>
//     <td className="colleague__info">
//       <div className="colleague__name">{country}</div>
//     </td>
//   </tr>
// );

// class Colleagues extends Component {
//   render() {
//     let panelContent;

//     if (this.props.loading) {
//       panelContent = (
//         <p>Loading...</p>
//       );
//     } else {
//       if (this.props.error) {
//         panelContent = (
//           <p>Something went wrong while fetching the data: <code>{this.props.error}</code></p>
//         );
//       } else {
//         panelContent = (
//           <table className="colleagues-table">
//             <colgroup>
//               <col width="0" />
//               <col width="100%" />
//             </colgroup>
//             <tbody>
//             {this.props.usersList.map((person, index) => (
//               <Colleague
//                 key={index}
//                 photo={person.picture.thumbnail}
//                 name={person.name.title +'. '+ person.name.first + ' ' + person.name.last}
//                 nationality={person.nat}
//                 email={person.email}
//                 country={person.location.country}
//               />
//             ))}
//             </tbody>
//           </table>
//         );
//       }
//     }

//     return (
//       <Panel title="Users List">
//         {panelContent}
//       </Panel>
//     );
//   }
// }
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: name => `${name.title}.${name.first} ${name.last}`,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Age',
    dataIndex: 'dob',
    key: 'dob',
    render: text => { return text.age },
  },
  {
    title: 'Cell #',
    dataIndex: 'cell',
    key: 'cell',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    render: text => {if(text === 'male'){text = 'M'}else{text = 'F'} return text},
  },
];
class Colleagues extends Component {
  render() {
    return (
      <Table loading={this.props.loading} columns={columns} dataSource={this.props.usersList} rowKey={record => record.id.value}  bordered
        title={() => <h4>User Table</h4>}
        footer={() => <h6>User Table Finished</h6>} pagination={{ pageSize: 50 }} scroll={{ y: 320 }}
        expandable={{
        expandedRowRender: record => <h4 style={{ margin: 0 }}>{`I am ${record.name.first} ${record.name.last} from ${record.location.country}, ${record.dob.age} years old ${record.gender}, my birth date is ${record.dob.date.split('T')[0]}, my cell # is:${record.cell} and email is:${record.email}`}</h4>,
          rowExpandable: record => record.name !== 'Not Expandable',
        }}
      />
    );
  }
}

export default Colleagues;
