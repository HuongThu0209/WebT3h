// import { useRouter } from 'next/router';
import axios from 'axios';
import { Row, Col, Image } from 'antd';
import * as api from '../../redux/api/movie';

export default function DetailMovie({ movie }) {
  return (
    <>
      <Row>
        <Col style={{ padding: '10px' }} span={6}>
          <Image
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
          <p style={{ textAlign: 'center', marginTop: '10px' }}>
            {movie.original_title}
          </p>
        </Col>
        <Col style={{ padding: '10px' }} span={12}>
          <h1>{movie.title}</h1>
          <p> {movie.overview} </p>
          <p>test uchie</p>
        </Col>
        <Col span={6}>
          <Row>
            {movie.images.backdrops.map((item, index) => (
              <Col span={24} key={index} style={{ padding: '10px' }}>
                <Image
                  src={`https://image.tmdb.org/t/p/w300${item.file_path}`}
                  alt={item.vote_count}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const params = query.movie || [];
  const id = params[1];
  const result = await api.getDataMoviesById(id);
  return {
    props: {
      movie: result,
    },
  };
}
