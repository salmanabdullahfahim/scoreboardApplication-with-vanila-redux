// Selection of DOM Element 

const deleteBtns = document.querySelectorAll('.lws-delete')
const resetBtn = document.getElementById("resetBtn");
const addAnotherMatchBtn = document.getElementById("addMatchBtn");
const allMatchesContainer = document.getElementById('all-matches-containers');


// Action creator

const increment = (payload) => {
    return {
        type: INCREMENT,
        payload
    }
}

const decrement = (payload) => {
    return {
        type: DECREMENT,
        payload
    }
}

const addMatch = () => {
    return {
        type: ADDAMATCH
    }
}

const deleteMatch = () => {
    return {
        type: DELETEMATCH
    }
}

const reset = () => {
    return {
        type: RESET
    }
}


// Initial State

const initialState = {
    id: 1,
    score: 0
}

