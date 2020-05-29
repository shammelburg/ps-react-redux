import * as types from "./actionTypes";

export function createCourse(course) {
    return { type: types.CREATE_COURSE, course }
}

export function clearCourseList() {
    return { type: types.CLEAR_COURSES_LIST }
}
