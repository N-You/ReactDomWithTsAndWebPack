import { Button, Input, Space } from 'antd';
import React from 'react';

export default function Form() {
  return (
    <div className="mt-8">
      <Space.Compact style={{ width: '100%' }}>
        <Input placeholder="添加内容" />
        <Button type="primary">Submit</Button>
      </Space.Compact>
    </div>
  );
}
