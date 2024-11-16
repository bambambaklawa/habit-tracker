const Stats = () => {

    return (
        <>

<div className="stats stats-vertical lg:stats-horizontal bg-gray-900 shadow">
  <div className="stat">
    <div className="stat-title text-xxs">users</div>
    <div className="stat-value text-xl">48</div>
    <div className="stat-desc text-xxs">start 2024</div>
  </div>

  <div className="stat">
    <div className="stat-title text-xxs">active habits</div>
    <div className="stat-value text-xl">147</div>
    <div className="stat-desc text-xxs">↗︎ 82 (32%)</div>
  </div>

  <div className="stat">
    <div className="stat-title text-xxs">new habits today</div>
    <div className="stat-value text-xl">12</div>
    <div className="stat-desc text-xxs">↘︎ 3 (14%)</div>
  </div>
</div>
</>
    )
}

export default Stats