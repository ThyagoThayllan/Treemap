import React from "react";
import { Treemap, ResponsiveContainer, Tooltip } from "recharts";

const renderTooltipContent = (props) => {
  const { payload } = props;

  if (payload && payload.length > 0) {
    const { name, value } = payload[0].payload;
    return (
      <div style={{backgroundColor: '#333', borderRadius: '10px', padding: '1rem'}}>
        <p><strong>Valor Total:</strong> R$ {value}</p>
      </div>
    );
  }

  return null;
};

const TreeMapChart = ({ data }) => {
  const treemapData = {
    name: "Produtos",
    children: data.map((product) => ({
      name: product.name,
      value: product.price * product.amount,
    })),
  };

  return (
    <div style={{ width: '50%', height: '400px' }}>
      <ResponsiveContainer>
        <Treemap
          data={treemapData.children}
          dataKey="value"
          ratio={4 / 3}
          stroke="#000"
          fill="#8884d8"
        >
          <Tooltip content={renderTooltipContent} />
        </Treemap>
      </ResponsiveContainer>
    </div>
  );
};

export const App = () => {
  const products = [
    {
      name: "Smartwatch",
      price: 200,
      amount: 12,
    },
    {
      name: "Fone Bluetooth",
      price: 130,
      amount: 10,
    },
    {
      name: "Teclado Gamer",
      price: 275,
      amount: 7,
    },
    {
      name: "Mouse Gamer",
      price: 180,
      amount: 8,
    },
    {
      name: "Mouse Pad",
      price: 120,
      amount: 12,
    },
    {
      name: "Headset Gamer",
      price: 170,
      amount: 8,
    },
    {
      name: "Monitor Gamer",
      price: 1775,
      amount: 2,
    },
    {
      name: "Carregador Iphone",
      price: 60,
      amount: 28,
    },
  ];

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexFlow: 'column', height: '100vh'}}>
      <h1>Treemap de Produtos</h1>
      <TreeMapChart data={products} />
    </div>
  );
};
