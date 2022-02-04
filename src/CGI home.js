
import './App.css';
import React from 'react';
import 'antd/dist/antd.css';

import AppHome from './views/home1';

import { Layout } from 'antd';
const { Content } = Layout;

function Cgihome() {
  return (
   <Layout className="mainLayout" >
     <Content>
            <AppHome/>
     </Content>
   </Layout>
  );
}

export default Cgihome;

