import {configureStore} from'@reduxjs/toolkit';
import todoSlices from './todoSliceStore';

const store = configureStore({
    reducer: {
      todo: todoSlices,
    },
  });
export default store;