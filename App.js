
import React, { useState } from 'react';

const App = () => {
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [entries, setEntries] = useState([]);

    const handleInputChange1 = (event) => {
        setInputValue1(event.target.value);
    };

    const handleInputChange2 = (event) => {
        setInputValue2(event.target.value);
    };

    const handleAddEntry = () => {
        setEntries([...entries, { textbox1: inputValue1, textbox2: inputValue2 }]);
        setInputValue1('');
        setInputValue2('');
    };

    const handleRemoveEntry = (index) => {
        const updatedEntries = [...entries];
        updatedEntries.splice(index, 1);
        setEntries(updatedEntries);
    };

    return (
        <div>
            <div>
               <h1>Directors And Movies</h1>
               <input
                    type="text"
                    value={inputValue1}
                    onChange={handleInputChange1}
                    placeholder="Director Name"
                />

                <input
                    type="text"
                    value={inputValue2}
                    onChange={handleInputChange2}
                    placeholder="Movie Name"
                />
                <button
                    onClick={handleAddEntry}
                    style={{ backgroundColor: 'green', color: 'white' }}
                >
                    Add Entry
                </button>
            </div>

            <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse', border: '1px solid black', borderSpacing: '1', }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black' }}>Director Name</th>
                        <th style={{ border: '1px solid black' }}>Movie Name</th>
                        <th style={{ border: '1px solid black' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {entries.map((entry, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid black' }}>{entry.textbox1}</td>
                            <td style={{ border: '1px solid black' }}>{entry.textbox2}</td>
                            <td style={{ border: '1px solid black' }}>
                                <button
                                    onClick={() => handleRemoveEntry(index)}
                                    style={{ backgroundColor: 'red', color: 'white' }}
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Your other React component content goes here */}
        </div>
    );
};

export default App;
