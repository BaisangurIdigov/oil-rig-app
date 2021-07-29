import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import oilRigsReduser from "./features/oilRigs";
import notesReduser from "./features/notes";
import statusReduser from "./features/status";

const logger = createLogger({
  diff: true,
  collapse: true,
});

export const store = createStore(
  combineReducers({
    oilRigs: oilRigsReduser,
    notes: notesReduser,
    status: statusReduser,
  }),
  applyMiddleware(thunk, logger)
);
