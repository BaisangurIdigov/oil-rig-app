const initialState = {
  items: [],
  loading: false,
};

export default function statusReduser(state = initialState, action) {
  switch (action.type) {
    case "patch/edit/status":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item._id === action.payload.id) {
            return {
              ...item,
              ...action.payload.data,
            };
          }
          return item;
        }),
      };
    case "post/add/status":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "status/load/pending":
      return {
        ...state,
        loading: true,
      };
    case "status/load/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    default:
      return state;
  }
}

export const loadStatus = () => {
  return async (dispatch) => {
    dispatch({ type: "status/load/pending" });
    const response = await fetch("/status");
    const json = await response.json();

    dispatch({ type: "status/load/fulfilled", payload: json });
  };
};

export const postStatus = ({ id, color, title }) => {
  return async (dispatch) => {
    await fetch("http://localhost:9000/status", {
      method: "POST",
      body: JSON.stringify({ id, color, title }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    dispatch({ type: "post/add/status", payload: { id, color, title } });
  };
};

export const patchStatus = (id, data) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/status/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    dispatch({ type: "patch/edit/status", payload: { id, data } });
  };
};
