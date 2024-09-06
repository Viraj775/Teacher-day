import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function Mentor() {
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');

  const navigate = useNavigate();

  function handleForm(e) {
    e.preventDefault();
    navigate('/Greeting', { state: { to, from } });
  }

  return (
    <>



<Header/>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
    
      <form onSubmit={handleForm}>
        <table
          style={{
            borderCollapse: 'collapse',
            width: '700px',
            height: '300px',
            position: 'absolute',
            left: '700px',
            top: '120px',
            background: 'gray',
          }}
        >
          <tbody>
            <tr>
              <td colSpan="2" style={{ padding: '10px' }}>
                <h1 style={{ color: 'black', fontWeight: 'bold', textAlign: 'center' }}>
                  Happy Teacher's Day
                </h1>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>
                <input
                  type='text'
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  placeholder='TO'
                  style={{ padding: '15px', width: '70%', marginLeft: '100px' }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>
                <input
                  type='text'
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder='FROM' 
                  style={{ padding: '15px', width: '70%', marginLeft: '100px' }}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ padding: '10px' }}>
                <input
                  type='submit'
                  value='Generate'
                  style={{ padding: '10px', width: '20%', fontSize: '20px', fontFamily: 'verdana', cursor: 'pointer', marginLeft: '250px', fontWeight: 'bold', borderRadius: '10px' }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    
    
    
    
    
    </>
    
  );
}

export default Mentor;
