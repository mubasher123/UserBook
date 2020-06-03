import VirtualTable from '../VirtualTable/VirtualTable';
import React, { Component } from 'react';
import 'antd/dist/antd.css';

const columns = [
    {
      title: 'Name',
      dataIndex: 'email',
      key: 'email',
      //render: name => `${name.title}.${name.first} ${name.last}`,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Age',
      dataIndex: 'email',
      key: 'email',
      //render: text => { return text.age },
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
      //render: text => {if(text === 'male'){text = 'M'}else{text = 'F'} return text},
    },
  ];

class UsersVirtualList extends Component {
    render() {
      return (
        <VirtualTable 
        columns={columns}
        dataSource={this.props.usersList}
        loading={this.props.loading}
        scroll={{
            y: 300,
            x: '100vw',
        }}
        />
      );
    }
  }
  
  export default UsersVirtualList;