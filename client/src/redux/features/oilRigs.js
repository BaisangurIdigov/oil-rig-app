const initialState = {
  items: [],
  loading: false,
};

export default function oilRigsReduser(state = initialState, action) {
  switch (action.type) {
    case "patch/edit/rigs":
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
    case "post/edit/rigs":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "rigs/load/pending":
      return {
        ...state,
        loading: true,
      };
    case "rigs/load/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    default:
      return state;
  }
}

export const loadOilRigs = () => {
  return async (dispatch) => {
    dispatch({ type: "rigs/load/pending" });
    const response = await fetch("/rigs");
    const json = await response.json();

    dispatch({ type: "rigs/load/fulfilled", payload: json });
  };
};

export const postRigs = ({ img, title }) => {
  return async (dispatch) => {
    await fetch("/rigs", {
      method: "POST",
      body: JSON.stringify({ img, title }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    dispatch({ type: "post/edit/rigs", payload: { img, title } });
  };
};

export const patchRig = (id, data) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/rigs/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    dispatch({ type: "patch/edit/rigs", payload: { id, data } });
  };
};
