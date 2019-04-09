import React, {Fragment} from 'react';

const  Welcome = () => {
  
    return (
      <Fragment>
        <div className="full-height">
          <div className="container custom_guess">
              <div className="jumbotron">
                  <h1 className="display-2">Virtual Planner</h1>
                  <p className="lead">VP is the best free virtual assistant</p>
                  <hr className="my-4" />
                  <p>Make to do lists. Track your budget. Manage your calendar. All for free.</p>
                  <a className="btn btn-primary btn-lg" href="/auth/google" role="button">Sign Up Today!</a>
              </div>
          </div>

          <div className="container-fluid welcome_custom">
        <div className="row justify-content-center features">
          <div className="col-md-4">
            <div className="thumbnail">
              <div className="caption">
              <div className="custom_guess">
                <i class="fas fa-list-ul fa-5x"></i>
                <h3>Track your to dos</h3>
              </div>
                <p className="features">Add to dos to different cateogires. Track your progress by marking tasks complete. Categorize tasks into different lists.</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="thumbnail">
              <div className="caption">
              <div className="custom_guess">
                <i class="fas fa-piggy-bank fa-5x"></i>
                <h3>Manage your budget</h3>
              </div>
                <p className="features"> Track your income and expenses. Make sure you stay within budget! Get a snapshot using the dashboard.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="thumbnail">
              <div className="caption">
                <div className="custom_guess">
                <i class="far fa-calendar-alt fa-5x"></i>
                <h3>Update your calendar</h3>
                </div>
                <p className="features">Add events to your calendar to keep track of your schedule. View daily, weekly or monthly snapshots. </p>
              </div>
            </div>
          </div>

        </div>
        </div>

        </div>

      </Fragment>

    )
};

export default Welcome
