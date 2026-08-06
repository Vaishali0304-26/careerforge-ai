function Settings() {
  return (
    <section className="settings-page">


      <div className="page-card">

        <p className="eyebrow">
          PREFERENCES
        </p>


        <h1>
          Settings ⚙️
        </h1>


        <p className="page-description">
          Customize your profile, career goals, and
          AI recommendations.
        </p>


      </div>





      <div className="settings-grid">


        <div className="page-card">


          <h2>
            👤 Profile Settings
          </h2>


          <div className="setting-item">

            <label>
              Full Name
            </label>

            <input
              value="Vaishali"
              readOnly
            />

          </div>



          <div className="setting-item">

            <label>
              Email
            </label>

            <input
              value="vaishali@email.com"
              readOnly
            />

          </div>



        </div>







        <div className="page-card">


          <h2>
            🎯 Career Preferences
          </h2>


          <div className="setting-item">

            <label>
              Target Role
            </label>

            <input
              value="AI Engineer"
              readOnly
            />

          </div>



          <div className="setting-item">

            <label>
              Experience Level
            </label>

            <input
              value="Fresher"
              readOnly
            />

          </div>


        </div>



      </div>







      <div className="page-card">


        <h2>
          🧠 Skills & Interests
        </h2>


        <div className="skill-tags">


          <span>
            Python
          </span>


          <span>
            Java
          </span>


          <span>
            Machine Learning
          </span>


          <span>
            React
          </span>


          <span>
            SQL
          </span>


        </div>


      </div>








      <div className="page-card">


        <h2>
          🔔 Notifications
        </h2>



        <div className="toggle-item">

          <span>
            New Job Recommendations
          </span>

          <input
            type="checkbox"
            defaultChecked
          />

        </div>



        <div className="toggle-item">

          <span>
            Interview Reminders
          </span>

          <input
            type="checkbox"
            defaultChecked
          />

        </div>



        <div className="toggle-item">

          <span>
            AI Resume Suggestions
          </span>

          <input
            type="checkbox"
            defaultChecked
          />

        </div>



      </div>





    </section>
  )
}

export default Settings