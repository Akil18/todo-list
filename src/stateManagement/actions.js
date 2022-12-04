import * as actions from './actionTypes';

export const taskAdded = description => ({
    type: actions.TASK_ADDED,
    payload: {
        description
    }
})

export const taskRemoved = id => ({
    type: actions.TASK_REMOVED,
    payload: {
      id
    }
})

export const taskCompleted = id => ({
    type: actions.TASK_COMPLETED,
    payload: {
        id
    }
})

export const setTaskIncomplete = id => ({
    type: actions.TASK_COMPLETED,
    payload: {
        id
    }
})