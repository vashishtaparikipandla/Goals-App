import './App.css'

function App() {
  return (
    <div className="app-container">
      <div className="dashboard">
        <header className="header">
          <button className="add-btn">+</button>
          <div className="profile-pic">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kate" alt="Profile" />
          </div>
        </header>

        <h1 className="title">My progress</h1>

        <div className="bubbles-container">
          <div className="bubble family">family</div>
          <div className="bubble friends">friends</div>
          <div className="bubble career">career</div>
          <div className="bubble financial">financial</div>
          <div className="bubble fun">fun</div>
          <div className="bubble health">health</div>
          <div className="bubble personal-growth">personal<br/>growth</div>
          <div className="bubble relationship">relationship</div>
        </div>

        <div className="subgoals-grid">
          <div className="subgoal-card card-blue">
            <span>2 of 3 subgoals</span>
            <h4>physically active life</h4>
          </div>
          <div className="subgoal-card card-orange">
            <span>1 of 6 subgoals</span>
            <h4>buy an apartment in Kiev</h4>
          </div>
          <div className="subgoal-card card-dark">
            <span>10 of 25 subgoals</span>
            <h4>improve relations with mom</h4>
          </div>
          <div className="subgoal-card card-light">
            <span>8 of 9 subgoals</span>
            <h4>find a job</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
