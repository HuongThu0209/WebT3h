import { useRouter } from 'next/router';

export default function DetailPost() {
  const router = useRouter();
  console.log(router);
  const { id, age } = router.query;
  return (
    <>
      <h1>
        chi tuet is la : {id}-age:{age}
      </h1>
      <Button type="primary">antd</Button>
    </>
  );
}
