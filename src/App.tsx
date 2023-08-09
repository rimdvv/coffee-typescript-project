import Navbar from '@/scenes/navbar'; //폴더안에 index.tsx있는 경우, 그 폴더까지만 경로 적어줘도 됨. index.tsx만
import { useState } from 'react';

function App() {
  const [selectedPage, setSelectedPage] = useState<string>('home');
  return (
    <div className="bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
