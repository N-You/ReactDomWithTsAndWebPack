import { Button, Input, Space } from 'antd';
import React from 'react';
import { useState } from 'react';

export default function Form(props: any) {
  let { addItem } = props;
  const [text, setText] = useState('');
  const onClick = () => {
    addItem({ id: Date.now(), text });
    setText('');
  };
  return (
    <form onSubmit={e => e.preventDefault()}>
      <div className="mt-8">
        <Space.Compact style={{ width: '100%' }}>
          <Input placeholder="添加内容" value={text} onChange={e => setText(e.target.value)} />
          <Button onClick={onClick} type="primary" disabled={text.length === 0}>
            Submit
          </Button>
        </Space.Compact>
      </div>
    </form>
  );
}
