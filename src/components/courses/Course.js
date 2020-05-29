import React from 'react'
import { connect } from 'react-redux'

const Course = (props) => {
  return (
    <div>
      <h2>Course</h2>
      {JSON.stringify(props.courses)}
    </div>
  )
}

function mapStateToProps(state) {
    return {
      courses: state.courses,
    }
  }

export default connect(mapStateToProps)(Course)
