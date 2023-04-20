import React from 'react';
import NavBar from './components/Navbar';
import Form from './components/Form';
import List from './components/List';

import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    { id: 1, text: '完成作业' },
    { id: 2, text: '敲代码' },
    { id: 3, text: '学习视频' },
    { id: 4, text: '吃饭' },
  ]);

  const addItem = (item: any) => setItems([...items, item]);
  const deleteItem = (check: any) => {
    if (window.confirm('你要删除他吗？')) {
      setItems(items.filter((item: any) => item.id !== check.id));
    }
  };
  const editItem = (item: any) => {
    const input = window.prompt('更新数据:', item.text);
    if (input)
      setItems(
        items.map((current: any) =>
          current.id === item.id ? { ...current, text: input } : current,
        ),
      );
  };
  const clearItems = () => {
    setItems([]);
  };

  return (
    <div className="wrapper bg-black text-white">
      <NavBar items={items} clearItems={clearItems}></NavBar>
      <div className="container text-xl px-5 box-border">
        <div className="mx-auto rounded px-5 mt-4 border border-solid border-light">
          <Form addItem={addItem}></Form>
          <List items={items} deleteItem={deleteItem} editItem={editItem}></List>
        </div>
      </div>
    </div>
  );
}

export default App;
