import React from "react";
import { Treemap, ResponsiveContainer, Tooltip } from "recharts";
import minhaFoto from './imgs/minhaFoto.jpg'
import styles from './App.module.css';

const renderTooltipContent = (props) => {
  const { payload } = props;

  if (payload && payload.length > 0) {
    const { value } = payload[0].payload;
    return (
      <div
        style={{
          backgroundColor: "#333",
          borderRadius: "10px",
          padding: "1rem",
        }}
      >
        <p>
          <strong>Valor Total:</strong> R$ {value}
        </p>
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
    <div style={{ width: "50%", height: "400px" }}>
      <ResponsiveContainer>
        <Treemap
          data={treemapData.children}
          dataKey="value"
          ratio={4 / 3}
          stroke="#fff"
          fill="#008000"
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

  const totalProductsSold = products
    .reduce((acc, product) => acc + product.price * product.amount, 0)
    .toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const date = new Date()
  const formattedDate = new Intl.DateTimeFormat('pt-BR').format();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexFlow: "column",
        minHeight: "100vh",
        position: 'relative',
        overflow: 'hidden',
        padding: '2rem'
      }}
    >
      <div style={{display: 'flex', flexFlow: 'column', alignItems: 'center', marginBottom: "10px"}}>
        <h1 style={{ textTransform: 'uppercase' }}>Vendas de hoje</h1>
        <p style={{fontStyle: 'italic', textDecoration: 'underline'}}>{formattedDate}</p>
      </div>
      <TreeMapChart data={products} />
      <p style={{ margin: "10px" }}><b>Total de vendas hoje:</b></p>
      <h2 style={{padding: '1rem 2rem', marginBottom: '2rem', backgroundColor: '#0f6a08', borderRadius: '10px'}}>{totalProductsSold}</h2>
      <div>
        {products.map((product) => (
          <div key={product.name} className={styles.productCard}>
            <p className={styles.product}><b>Produto:</b> {product.name}</p>
            <p className={styles.product}><b>Preço:</b> {(product.price).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
            <p className={styles.product}><b>Quantidade:</b> {product.amount}</p>
          </div>
        ))}
      </div>

      <div className={styles.profile}>
        <div className={styles.iconeMenu}>☰</div>
        <p>Feito for <a href='https://www.linkedin.com/in/thyago-thayllan-mendes-de-sousa-2058b0239/' target='_blank'>Thyago Thayllan</a></p>
        <img src={minhaFoto} alt="Foto de Thyago Thayllan" />
        <div className={styles.info}>
          <p className={styles.name}>Thyago Thayllan</p>
          <p className={styles.job}>Desenvolvedor Front-End</p>
        </div>
        <div className={styles.technologies}>
          <h2>Tecnologias</h2>
          <div>
           <ul>
              <li>ReactJS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
            </ul>
            <ul>
              <li>React Native</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
        <div className={styles.buttons}>
          <a target='_blank' className={styles.linkedin} href="https://www.linkedin.com/in/thyago-thayllan-mendes-de-sousa-2058b0239/">LinkedIn</a>
          <a target='_blank' className={styles.github} href="https://github.com/ThyagoThayllan">GitHub</a>
        </div>
      </div>
    </div>
  );
};
