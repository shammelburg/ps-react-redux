import React from 'react'
import { connect } from 'react-redux'
import * as courseActions from '../../redux/actions/courseActions'
// import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import Course from './Course'

class CoursesPage extends React.Component {
  state = {
    course: {
      id: null,
      title: '',
      category: '',
    },
  }

  handleChange = (event) => {
    const course = { ...this.state.course, [event.target.name]: event.target.value, id: Math.random() }
    this.setState({ course })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.actions.createCourse(this.state.course)
  }

  handleClearList = () => {
    this.props.actions.clearCourseList()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          name="title"
          value={this.state.course.title}
          onChange={this.handleChange}
          placeholder="title"
        />
        <br />
        <input
          type="text"
          name="category"
          value={this.state.course.category}
          onChange={this.handleChange}
          placeholder="category"
        />
        <br />
        <input type="submit" value="Save" />
        <br />
        {this.props.courses.map((course) => (
          <div key={course.id}>{course.title}</div>
        ))}
        <br />
        <button type="button" value="Clear List" onClick={this.handleClearList}>
          Clear List
        </button>
        <Course />
      </form>
    )
  }
}
// CoursesPage.propTypes = {
//   dispatch: this.state.course,
// }

function mapStateToProps(state) {
  return {
    courses: state.courses,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)
