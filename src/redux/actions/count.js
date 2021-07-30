import { INCREMENT, DECREMENT } from "../constant";
export const increment = (data) => ({ type: INCREMENT, data })
export const decrement = (data) => ({ type: DECREMENT, data })
//此文件中可以使用store中dispatch等方法
export const incrementAsycn = (data, time) => {
  return (dispatch) => setTimeout(() => {
    dispatch(increment(data));
  }, time);
}
