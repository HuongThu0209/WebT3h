import ButtonComponent from '../../component/counter/button'
import ResultComponent from '../../component/counter/result'

export default function AppCounter(){
  return (
    <>
      <ButtonComponent name="increment">+</ButtonComponent>
      <ButtonComponent name="decrement">-</ButtonComponent>
      <ResultComponent/>
    </>
  );
}