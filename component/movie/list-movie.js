import Link from 'next/link';
import { Row, Col, Card, Skeleton } from 'antd';
import * as reselect from '../../redux/movie/reselect';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import slugify from 'react-slugify';

const { Meta } = Card;

export default function ListMovie({ movies }) {
  const { loading, movie } = useSelector(
    createStructuredSelector({
      loading: reselect.loadingSearch,
      movie: reselect.getDataMovie,
    })
  );

  if (loading) {
    return <Skeleton />;
  }
  return (
    <>
      <Row style={{ marginTop: '20px' }}>
        <Col span={20} offset={2}>
          <Row>
            {movie
              ? movie.map((item, index) => (
                  <Col span={6} key={index}>
                    <Link href={`watch/${slugify(item.title)}/${item.id}`}>
                      <a>
                        <Card
                          hoverable
                          style={{ width: 260 }}
                          cover={
                            <img
                              alt="example"
                              src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                            />
                          }
                        >
                          <Meta title={item.title} />
                        </Card>
                      </a>
                    </Link>
                  </Col>
                ))
              : null}
          </Row>
        </Col>
      </Row>
    </>
  );
}
