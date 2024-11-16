const Stats = () => {

    return (
        <>

<div className="stats stats-vertical lg:stats-horizontal bg-gray-800 shadow">
  <div className="stat">
    <div className="stat-title text-gray-300 text-xxs">users</div>
    <div className="stat-value text-xl">48</div>
    <div className="stat-desc text-gray-300 text-xxs">start 2024</div>
  </div>

  <div className="stat">
    <div className="stat-title text-gray-300 text-xxs">active habits</div>
    <div className="stat-value text-xl">147</div>
    <div className="stat-desc text-gray-300 text-xxs">↗︎ 82 (32%)</div>
  </div>

  <div className="stat">
    <div className="stat-title text-gray-300 text-xxs">new habits today</div>
    <div className="stat-value text-xl">12</div>
    <div className="stat-desc text-gray-300 text-xxs">↘︎ 3 (14%)</div>
  </div>
</div>
</>
    )
}

export default Stats