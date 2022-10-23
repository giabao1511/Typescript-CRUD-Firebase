import * as types from "../action_type";
const initialState = {
  loading: false,
  error: null,
  customers: null,
  customer: null,
  createdCustomer: null,
};
const CustomerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_ALL_CUSTOMER_START:
    case types.CREATE_CUSTOMER_START:
    case types.UPDATE_CUSTOMER_START:
    case types.DELETE_CUSTOMER_START:
    case types.GET_CUSTOMER_START:
      return {
        ...state,
        loading: true,
      };
    case types.CLEARING_DATA: {
      return {
        ...state,
        loading: false,
        customer: null,
        customers: null,
      };
    }
    case types.GET_ALL_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        customers: action.payload,
      };

    case types.GET_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        customer: action.payload,
      };

    case types.CREATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        createdCustomer: action.payload,
      };
    case types.DELETE_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.UPDATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case types.GET_ALL_CUSTOMER_FAIL:
    case types.CREATE_CUSTOMER_FAIL:
    case types.DELETE_CUSTOMER_FAIL:
    case types.UPDATE_CUSTOMER_FAIL:
    case types.GET_CUSTOMER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default CustomerReducer;
