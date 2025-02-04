import React from 'react';
import Heading from './components/Heading.jsx'; // Указываем расширение .jsx
import Paragraph from './components/Paragraph.jsx'; // Указываем расширение .jsx
import Spacer from './components/Spacer.jsx'; // Указываем расширение .jsx
import Collapsible from './components/Collapsible.jsx'; // Указываем расширение .jsx
import Image from './components/Image.jsx'; // Указываем расширение .jsx

const App = () => {
  return (
    <div>
  <Heading level={1}>Главный заголовок (H1)</Heading>
  <Heading level={2}>Подзаголовок (H2)</Heading>
      <Paragraph>Текстовый блок</Paragraph>
      <Spacer />
      <Collapsible title="Раскрыть" size="large">
        <Paragraph>Текст</Paragraph>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxXABfgLGRz35MoNDWWLUP-WUtnQ6QT_kxNA&s" alt="Placeholder" />
      </Collapsible>
    </div>
  );
};

export default App;