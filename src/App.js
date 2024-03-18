
import './App.css';
import Modal from './Modal/Modal'
import Header from './componets/Header';
import Counter from './componets/Caunter';
import Card from './componets/Card'
import Data from './data/Data.json'
import TackForm from './tacskList/TackForm'
import { useState } from 'react';

function App() {
  const [modalActive, setModalActive] = useState('')
  const [, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(Data);

  function onChange(e) {
    setSearchTerm(e.target.value);
    const filtered = Data.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(filtered);
  }
  return (
    <div className="App">
      
      <main>
        <Header />
          <button className='btn' onClick={() => setModalActive(true)}>open Modal</button>
        <Counter />
        <input onChange={onChange} type="text" />
        <div className='container'>
        {
            filteredData.map((item) =>
              <Card
                key={item.id}
                price={item.price}
                oldPrice={item.oldPrice}
                despreition={item.description}
                title={item.title}
                img={item.image}
              />
            )
          }
        <Card 
          price={112312323}
          oldPrice={1234}
          despreition={'dfjwfkjnw  jjjjjjjjjg ew gewk gwh '}
          title={'Hello Word!'}
          img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxt4rAB4xzXRVs3Tx7WBArVd48KpUIOWT6hIEgtt0UKg&s'}
           />
            <Card 
          price={112312323}
          oldPrice={1234}
          despreition={'dfjwfkjnw  jjjjjjjjjg ew gewk gwh '}
          title={'Hello Word!'}
          img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxt4rAB4xzXRVs3Tx7WBArVd48KpUIOWT6hIEgtt0UKg&s'}
           />
            <Card 
          price={112312323}
          oldPrice={1234}
          despreition={'dfjwfkjnw  jjjjjjjjjg ew gewk gwh '}
          title={'Hello Word!'}
          img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxt4rAB4xzXRVs3Tx7WBArVd48KpUIOWT6hIEgtt0UKg&s'}
           />
        </div>
      </main>
      <Modal active={modalActive} setacrive={setModalActive}>
        <input className='input' type="text"/>
        <input className='input' type="text" />
        <button className='newBtn'>Add</button>
      </Modal>
    <TackForm>
    <input  type="text"/>
    <input  type="text"/>
    <input  type="text"/>
    <input  type="text"/>
    </TackForm>
    </div>
  );
}

export default App;
