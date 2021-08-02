import { patchRig } from './oilRigs'

const initialState = {
  items: [],
  loading: false,
};

export default function notesReduser(state = initialState, action) {
  switch (action.type) {
    case "patch/edit/notes":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item._id === action.payload.id) {
            return {
              ...item,
              ...action.payload.data
            }
          }
        })
      }
    case "post/edit/notes":
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case "notes/load/pending":
      return {
        ...state,
        loading: true,
      };
    case "notes/load/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    default:
      return state;
  }
}

export const loadNotes = (id) => {
  return async (dispatch) => {
    dispatch({ type: "notes/load/pending" });
    const response = await fetch(`/notes/${id}`);
    const json = await response.json();

    dispatch({ type: "notes/load/fulfilled", payload: json });
  };
};

export const postNotes = ({ rig, text, status }) => {
  return async (dispatch) => {
    await fetch("/notes", {
      method: "POST",
      body: JSON.stringify({ rig, text, status }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    dispatch({ type: "post/edit/rigs", payload: { rig, text, status }});
  };
};


export const patchNotes = (id, data) => {
  return async (dispatch) => {
    await fetch(`/notes/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })

    dispatch({ type: "patch/edit/notes", payload: {id, data}})
  }
}