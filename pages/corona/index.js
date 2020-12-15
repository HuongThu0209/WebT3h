import { Row, Col, Skeleton } from 'antd';
import { useState, useEffect } from 'react';

export default function AppCorona() {
  const [loading, setLoading] = useState(false);
  const [visrus, setDataVirus] = useState({});

  useEffect(() => {
    const getDataCorona = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://cors-anywhere.herokuapp.com/https://api.covid19api.com/summary`
        );
        const data = await response.json();
        await setDataVirus(data);
        await setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getDataCorona();
  }, []);

  if (loading && !visrus.hasOwnProperty('Global')) {
    return <Skeleton active />;
  }
  console.log(visrus);

  return (
    <>
      <Row>
        <Col span={12} offset={6}>
          <h1>thong tin ca nhiem</h1>
        </Col>
        <Row>
          <Col span={8}>
            <p>
              so ca moi nhiem{' '}
              {visrus['Global'] !== undefined
                ? visrus['Global']['NewConfirmed'].toLocaleString()
                : null}
            </p>
            <p>tong so ca nhiem</p>
          </Col>

          <Col span={8}>
            <p>thong tin ca chet</p>
            <p>tong so ca chet</p>
          </Col>

          <Col span={8}>
            <p>thong tin ca khoi</p>
            <p>tong so ca khoi</p>
          </Col>
        </Row>
      </Row>
    </>
  );
}
