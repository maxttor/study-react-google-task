import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

import api from '../api';

const TaskListsActions = {
    loadTaskLists() {
        api.listTaskLists()
        .then(data => {
            AppDispatcher.dispatch({
                type: AppConstants.TASK_LISTS_LOAD_SUCCESS,
                items: data.items
            });
        })
        .catch(err => {
            AppDispatcher.dispatch({
                type: AppConstants.TASK_LISTS_LOAD_FAIL,
                error: err
            });
        });
    },

    createTaskList(params) {
        api.insertTaskList({ title: params.name })
        .then(data => {
            AppDispatcher.dispatch({
                type     : AppConstants.TASK_LIST_CREATE_SUCCESS,
                taskList : data
            });
        })
        .catch(err => {
            AppDispatcher.dispatch({
                type  : AppConstants.TASK_LIST_CREATE_FAIL,
                error : err
            });
        });
    },

    loadTaskList(taskListId) {
        console.log('2222');
        //api.getTaskList(taskListId);
        // .then(data => {
        //     console.log(data);
        //     // AppDispatcher.dispatch({
        //     //     type: AppConstants.TASK_LIST_LOAD_SUCCESS,
        //     //     list: data.list
        //     // });
        // })
        // .catch(err => {
        //     AppDispatcher.dispatch({
        //         type: AppConstants.TASK_LIST_LOAD_FAIL,
        //         error: err
        //     })
        // });
    }
};

export default TaskListsActions;
