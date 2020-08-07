import { put, all, takeLeading, takeEvery, call } from "redux-saga/effects";
import {
  GET_PERSONS,
  FIRE_PERSON,
  FirePersonAction,
  HIRE_PERSON,
  HirePersonAction
} from "../ducks/person";
import { getPersons, firePerson, hirePerson } from "./person";
import { watchLoadingOperations } from "./ui";

export default function* rootSaga(): Generator {
  yield all([
    takeLeading(GET_PERSONS, function* () {
      yield call(getPersons);
    }),
    takeEvery(FIRE_PERSON, function* (a: FirePersonAction) {
      yield call(firePerson, a.payload);
    }),
    takeEvery(HIRE_PERSON, function* (a: HirePersonAction) {
      yield call(hirePerson, a.payload);
    }),
    watchLoadingOperations(),
    put({ type: GET_PERSONS })
  ]);
}
