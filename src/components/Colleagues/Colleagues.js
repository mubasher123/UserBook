import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';

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
