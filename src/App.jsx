import { Header } from './components/Header';
import { Input } from './components/Input';
import { ButtonCreate } from './components/ButtonCreate';
import { ButtonRemove } from './components/ButtonRemove';
import './global.css'

export function App() {
  return (
    <>
    <Header />
    <Input />
    <ButtonCreate />
    <ButtonRemove />
    </>
  );
}
