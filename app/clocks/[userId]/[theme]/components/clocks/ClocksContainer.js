'use client'
import ClockContainer from './sub-components/ClockContainer';
import EditClockContainer from './sub-components/EditClockContainer'

export default function ClocksContainer({ userId, clockData, setClockData }) {
  console.log(clockData)

  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 m-2">
    {clockData.map((clock) =>
      clock.editing ? (
        <EditClockContainer
          key={clock.id}
          clock={clock}
          // theme={theme}
          setClockData={setClockData}
          clockData={clockData}
        />
      ) : 
      (
        <ClockContainer
          id={clock.id}
          key={clock.id}
          userId={clock.userId}
          clock={clock}
          clockData={clockData}
          setClockData={setClockData}
        />
      )
    )}
  </div>
  );
}
