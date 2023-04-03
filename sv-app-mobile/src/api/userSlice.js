import signinAPI from "./signInAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const signin = createAsyncThunk("auth/signIn", async (payload, thunkAPI) => {
    try {
      const data = await signinAPI.signIn(payload);
      AsyncStorage.setItem("accessToken", data.data.accessToken);
      AsyncStorage.setItem("refreshToken", data.data.refreshToken);
      AsyncStorage.setItem("user", JSON.stringify(data.data));
      return data.data;   
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response)
    }
   
  });

  const userSlice = createSlice({
    name: "user",
    initialState: {
      user:[],
      loading:'idle'
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase (signin.fulfilled,(state,action) =>{
        state.user.push(action.payload);
      })
      

    },
  });
  
  const { reducer } = userSlice;
  export default reducer;