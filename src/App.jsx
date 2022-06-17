import HomePage from 'components/HomePage';
import MentionLegals from 'pages/MentionLegals';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mentionlegales" element={<MentionLegals />} />
    </Routes>
  );
}

export default App;
