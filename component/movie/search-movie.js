import { Row, Col, Input } from 'antd';
import { searchMovie } from '../../redux/movie/action';
import { useDispatch } from 'react-redux';

const { Search } = Input;

export default function SearchMovie() {
  const dispatch = useDispatch();
  const searchFilm = (name) => {
    dispatch(searchMovie(name));
  };
  return (
    <>
      <Row style={{ padding: '10px' }}>
        <Col span={12} offset={6}>
          <Search
            placeholder="name movie"
            onSearch={(val) => searchFilm(val)}
            enterButton
          />
        </Col>
      </Row>
    </>
  );
}
