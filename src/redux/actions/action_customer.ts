import * as types from "../action_type";
import db from "../../firebase/db";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import userType from "../../interfaces/user_interface";
//?
export const GetAllCustomerStart = () => ({
  type: types.GET_ALL_CUSTOMER_START,
});
export const GetAllCustomerSuccess = (api: any) => ({
  type: types.GET_ALL_CUSTOMER_SUCCESS,
  payload: api,
});
export const GetAllCustomerFail = (error: any) => ({
  type: types.GET_ALL_CUSTOMER_FAIL,
  payload: error,
});

export const GetCustomerStart = () => ({
  type: types.GET_CUSTOMER_START,
});
export const GetCustomerSuccess = (api: any) => ({
  type: types.GET_CUSTOMER_SUCCESS,
  payload: api,
});
export const GetCustomerFail = (error: any) => ({
  type: types.GET_CUSTOMER_FAIL,
  payload: error,
});

export const CreateCustomerStart = () => ({
  type: types.CREATE_CUSTOMER_START,
});
export const CreateCustomerSuccess = (api: any) => ({
  type: types.CREATE_CUSTOMER_SUCCESS,
  payload: api,
});
export const CreateCustomerFail = (error: any) => ({
  type: types.CREATE_CUSTOMER_FAIL,
  payload: error,
});

export const DeleteCustomerStart = () => ({
  type: types.DELETE_CUSTOMER_START,
});
export const DeleteCustomerSuccess = () => ({
  type: types.DELETE_CUSTOMER_SUCCESS,
});
export const DeleteCustomerFail = (error: any) => ({
  type: types.DELETE_CUSTOMER_FAIL,
  payload: error,
});

export const UpdateCustomerStart = () => ({
  type: types.UPDATE_CUSTOMER_START,
});
export const UpdateCustomerSuccess = () => ({
  type: types.UPDATE_CUSTOMER_SUCCESS,
});
export const UpdateCustomerFail = (error: any) => ({
  type: types.UPDATE_CUSTOMER_FAIL,
  payload: error,
});

export const ClearingData = () => ({
  type: types.CLEARING_DATA,
});

//!Register
export const GetCustomerInitiate = (id: string) => async (dispatch: any) => {
  try {
    dispatch(GetCustomerStart());
    const docRef = doc(db, "customer", id);

    onSnapshot(docRef, (snapshot) => {
      let user: DocumentData | undefined = {};
      user = snapshot.data();
      dispatch(GetCustomerSuccess({ ...user, id }));
    });
  } catch (error) {
    dispatch(GetCustomerFail(error));
  }
};

export const GetAllCustomerInitiate = () => async (dispatch: any) => {
  try {
    dispatch(GetAllCustomerStart());
    const colRef = collection(db, "customer");
    onSnapshot(colRef, (snapshot) => {
      let users: userType[] = [];
      snapshot.docs.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });

      dispatch(GetAllCustomerSuccess(users));
    });
  } catch (error) {
    dispatch(GetAllCustomerFail(error));
  }
};

export const CreateCustomerInitiate =
  ({ name, email, contact }: userType) =>
  async (dispatch: any) => {
    try {
      dispatch(CreateCustomerStart());
      const colRef = collection(db, "customer");

      addDoc(colRef, {
        name,
        email,
        contact,
        status: 1,
      });

      dispatch(CreateCustomerSuccess({ message: "Success" }));
    } catch (error) {
      dispatch(CreateCustomerFail(error));
    }
  };

export const DeleteCustomerInitiate = (id: string) => async (dispatch: any) => {
  try {
    dispatch(DeleteCustomerStart());
    const docRef = doc(db, "customer", id);

    deleteDoc(docRef);
    dispatch(DeleteCustomerSuccess());
  } catch (error) {
    dispatch(DeleteCustomerFail(error));
  }
};

export const UpdateCustomerInitiate =
  ({ id, name, email, contact }: userType) =>
  async (dispatch: any) => {
    try {
      dispatch(UpdateCustomerStart());
      const docRef = doc(db, "customer", id);

      onSnapshot(docRef, (doc) => {
        const info = doc.data();
        updateDoc(docRef, {
          name: name || info?.name,
          email: email || info?.email,
          contact: contact || info?.contact,
          status: 1,
        });
      });

      dispatch(UpdateCustomerSuccess());
    } catch (error) {
      dispatch(UpdateCustomerFail(error));
    }
  };
