import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../styles/teacherPage.css";
import TeacherCreate from "./teacherCreate";

class TeacherPage extends Component {
  render() {
    return (
      <div className="teacher-tabs">
        <Tabs>
          <div>
            <TabList>
              <Tab>
                <h2 className="tab-text">Create and Assign Problem</h2>
              </Tab>
              <Tab>
                <h2 className="tab-text">View Student Submissions</h2>
              </Tab>
            </TabList>
          </div>

          <TabPanel>
            <TeacherCreate />
          </TabPanel>
          <TabPanel>
            <h2>Student Submissions</h2>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default TeacherPage;
