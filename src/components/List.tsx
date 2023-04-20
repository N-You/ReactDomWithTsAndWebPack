import React from 'react';

export default function List(props: any) {
  let { items, deleteItem, editItem } = props;

  if (items.length === 0) return <p>没有任何数据</p>;
  return (
    <ul className="mt-5 rounded border-t-2">
      {items &&
        items.map((item: any) => (
          <li
            key={item.id}
            className="border-b-2 list-group-item flex justify-between items-center bg-warm-gray-300 "
          >
            <span>{item.text}</span>
            <div>
              <i className="pointer right-3 mr-1 text-yellow-200" onClick={() => editItem(item)}>
                编辑
              </i>
              <i onClick={() => deleteItem(item)} className="pointer right-0 text-red-400">
                删除
              </i>
            </div>
          </li>
        ))}
    </ul>
  );
}
