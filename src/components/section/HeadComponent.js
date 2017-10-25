'use strict';

import React from 'react';
import {Row, Col, Input, Icon} from 'antd'
require('styles/section/Head.scss');

class HeadComponent extends React.Component {
  render() {
  console.log(Row)
  
    return (
      <div className="head-component">
        <Row className="headLine">
          <Col span={6} className="logo">
            <p>网易云音乐</p>
          </Col>
          <Col span={12} className="navList">
            <ul>
              {/* <Row> */}
                <li>发现音乐</li>
                <li>我的音乐</li>
                <li>朋友</li>
                <li>商城</li>
                <li>音乐人</li>
                <li>下载客户端</li>
              {/* </Row> */}
            </ul>
          </Col>
          <Col span={6} className="toolList">
            <Input className="searchInput"
            prefix={<Icon type="user" />}
            onFocus={()=>{console.log('focus')}}
            size="small"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

HeadComponent.displayName = 'SectionHeadComponent';

// Uncomment properties you need
// HeadComponent.propTypes = {};
// HeadComponent.defaultProps = {};

export default HeadComponent;
