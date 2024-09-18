import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import QRCode from 'react-qr-code';

const App = () => {
  const [prefix, setPrefix] = useState('');
  const [suffix, setSuffix] = useState('');
  const [rangeStart, setRangeStart] = useState<number | ''>('');
  const [rangeEnd, setRangeEnd] = useState<number | ''>('');
  const [qrCodes, setQrCodes] = useState<string[]>([]);

  const generateRandomNumber = () => {
    return Math.floor(10000000 + Math.random() * 90000000).toString();
  };

  const handleGenerateQRCodes = () => {
    if (rangeStart === '' || rangeEnd === '') return;
    const codes = [];
    for (let i = rangeStart; i <= rangeEnd; i++) {
      const code = `${prefix}${generateRandomNumber()}${suffix}`;
      codes.push(code);
    }
    setQrCodes(codes);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>QR Code Generator</h1>
      <div style={{ marginBottom: '10px' }}>
        <label>Prefix: </label>
        <input
          type="text"
          value={prefix}
          onChange={(e) => setPrefix(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Suffix: </label>
        <input
          type="text"
          value={suffix}
          onChange={(e) => setSuffix(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Range Start: </label>
        <input
          type="number"
          value={rangeStart}
          onChange={(e) => setRangeStart(Number(e.target.value))}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Range End: </label>
        <input
          type="number"
          value={rangeEnd}
          onChange={(e) => setRangeEnd(Number(e.target.value))}
        />
      </div>
      <button onClick={handleGenerateQRCodes}>Generate QR Codes</button>

      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
        {qrCodes.map((code) => (
          <div key={uuidv4()} style={{ margin: '10px' }}>
            <QRCode value={code} />
            <p>{code}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
