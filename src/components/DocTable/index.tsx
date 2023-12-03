import React, { useEffect, useState } from "react";
import { Table } from "antd";
import "./index.css";
interface AttributeItem {
  title: string;
  dataIndex: string;
  render?: any;
  width?: string | number;
}
interface Props {
  attribute: AttributeItem[];
  value: any[];
}

const data: any[] = [
  {
    key: "1",
    name: "article",
    description: "定义页面独立的内容区域。",
  },
  {
    key: "2",
    name: "aside",
    description: "定义页面的侧边栏内容。",
  },
  {
    key: "3",
    name: "article",
    description: "定义页面独立的内容区域。",
  },
  {
    key: "4",
    name: "aside",
    description: "定义页面的侧边栏内容。",
  },
];

export default function DocTable(props: Props) {
  const [attributeList, setAttributeList] = useState([]);
  function generateColumns(data: AttributeItem[]) {
    const attributeList = data.map((item: AttributeItem, index) => {
      // debug: 修复table组件无法撑满父容器问题
      if (index === data.length - 1) {
        item.width = "100%";
      }

      return {
        ...item,
        title: item.title,
        dataIndex: item.dataIndex,
        key: item.dataIndex,
      };
    });
    setAttributeList(attributeList);
  }

  useEffect(() => {
    generateColumns(props.attribute);
  }, []);

  return (
    <Table
      className="doc-table"
      columns={attributeList}
      dataSource={data}
      pagination={false}
    />
  );
}
