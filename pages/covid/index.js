import { Row, Col, Skeleton } from 'antd';

export default function AppCovid({ result }) {
  if (!result.hasOwnProperty('Global')) {
    return <Skeleton active />;
  }
  return (
    <>
      <Row>
        <Col span={12} offset={6}>
          <h1>thong tin ca nhiem</h1>
        </Col>
        <Row>
          <Col span={8}>
            <p>
              so ca moi nhiem {result.Globlal.NewConfirmed.toLocalString()}{' '}
            </p>
            <p>
              tong so ca nhiem {result.Globlal.TotalConfirmed.toLocalString()}
            </p>
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

export async function getStaticProps() {
  const response = await fetch(`https://api.covid19api.com/summary`);
  const data = await response.json();
  return {
    props: {
      result,
    },
  };
}
