import { Saga } from "redux-saga";
import { put, all, takeLeading } from "redux-saga/effects";
import { GET_PERSONS } from "../ducks/person";
import { getPersons } from "./person";

export default function* rootSaga() {
  yield all([takeLeading(GET_PERSONS, getPersons), put({ type: GET_PERSONS })]);
}
