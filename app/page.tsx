'use client'

import { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css'; 

const Home = () => {
  const [showBusSelect, setShowBusSelect] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState('#61 Elmwood');
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(16);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentDate(
        `${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][now.getDay()]} ${
          ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][
            now.getMonth()
          ]
        } ${now.getUTCDate()} ${now.getUTCFullYear()}`
      );
      setCurrentTime(now.toLocaleString([], { hour12: true, hour: 'numeric', minute: '2-digit', second: '2-digit' }));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const toggleBusSelection = () => {
    setShowBusSelect(!showBusSelect);
  };

  const updateBusRoute = (id: number) => {
    const routes: Record<number, string> = {
      50: '#50 Red',
      51: '#51 Green',
      60: '#60 Bessborough',
      61: '#61 Elmwood',
      62: '#62 Hildegard',
      63: '#63 Lewisville',
      64: '#64 Hospitals',
      65: '#65 Killam',
      66: '#66 Caledonia',
      67: '#67 Edinburgh',
      68: '#68 Salisbury',
      81: '#81 Riverview',
      82: '#82 Riverview Place',
      93: '#93 Champlain',
      94: '#94 Centrale',
      95: '#95 Amirault',
      85: '#85 Riverview Connector',
      86: '#86 Riverview Park & Ride',
      16: '#16 Hennessey',
    };
    setSelectedRoute(routes[id] || '#61 Elmwood');
    setShowBusSelect(false);
  };

  return (
    <div style={{display: 'flex'}}>
      <img src="/arrow.png" alt="Arrow" className={styles.arrow} />

      <div className={styles.menuButton} onClick={toggleBusSelection}>
        &#9776;
      </div>

      {showBusSelect ? (
        <div id="bus-select" className={styles.busSelect}>
          <ul>
            {Object.entries({
              50: '#50 Red',
              51: '#51 Green',
              60: '#60 Bessborough',
              61: '#61 Elmwood',
              62: '#62 Hildegard',
              63: '#63 Lewisville',
              64: '#64 Hospitals',
              65: '#65 Killam',
              66: '#66 Caledonia',
              67: '#67 Edinburgh',
              68: '#68 Salisbury',
              81: '#81 Riverview',
              82: '#82 Riverview Place',
              93: '#93 Champlain',
              94: '#94 Centrale',
              95: '#95 Amirault',
              85: '#85 Riverview Connector',
              86: '#86 Riverview Park & Ride',
              16: '#16 Hennessey',
            }).map(([id, route]) => (
              <li key={id} onClick={() => updateBusRoute(Number(id))}>
                {route}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div style={{display:'flex', justifyContent:'center'}}>
          <div className={styles.purpleBox}>
            <p id="pass" className={styles.pass}>
              1 Ride Pass
            </p>
            <h1 id="demo" style={{fontSize: 22}}>{currentDate}</h1>
            <h1 id="txt" style={{fontSize: 21}}>{currentTime}</h1>
            <h1 style={{ color: 'yellow', fontSize:22 }}>Codiac Transit</h1>
            <h1></h1>
            <h2 className={styles.busRoute}>{selectedRoute}</h2>
            <div className={styles.busContainer}>
              <img src="/bus.png" alt="Bus" className={styles.bus} />
              <img src="/background.png" alt="Background" className={styles.background} />
              <img src="/button.png" alt="Button" className={styles.buttonImage} />
            </div>
            <h1 className={styles.time}>{`This pass expires after ${timeRemaining} minutes`}</h1>
            <h2 className={styles.userId}>User ID 209217</h2>
          </div>
        </div>
      )}
      <img className={styles.bottomBar} src="/bottombar.png" alt="Bottom Bar" />
    </div>
  );
};

export default Home;
