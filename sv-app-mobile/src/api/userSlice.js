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

  // export const checkAccessToken = createAsyncThunk(
  //   'auth/checkAccessToken',
  //   async () => {
  //     try {
  //       const accessToken = await AsyncStorage.getItem('accessToken');
  //       const refreshToken = await AsyncStorage.getItem('refreshToken');
  
  //       if (accessToken && refreshToken) {
  //         const url = '/userRequest/getThongTinSinhVien';
  //         const response = await axiosClient.get(url, {
  //           headers: { authorization: `Bearer ${accessToken}` },
  //         });
  //         return response.data;
  //       } else {
  //         throw new Error('Access token and/or refresh token not found');
  //       }
  //     } catch (error) {
  //       throw error;
  //     }
  //   }
  // );

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