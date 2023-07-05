import { call, put, takeEvery, take, all } from "redux-saga/effects";
import { getFetchCatsSuccess, getFetchCatsFailure } from "../feature/catSlice";
function* workGetCatsFetch(payload: any): any {
  try {
    const response = yield call(
      fetch,
      `https://api.thecatapi.com/v1/breeds?page=${payload.page}&limit=${payload.limit}`
    );
    const data = yield response.json();

    yield put(getFetchCatsSuccess(data));
  } catch (error) {
    yield put(getFetchCatsFailure(error));
  }
}

function* onPageChange(): any {
  const { payload } = yield take("cats/getFetchCatsPage");
  yield call(workGetCatsFetch, payload);
}

function* catSaga() {
  yield takeEvery("cats/getFetchCats", onPageChange);
  yield all([call(workGetCatsFetch, { page: 0, limit: 10 })]);
}

export default catSaga;
