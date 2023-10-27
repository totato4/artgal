import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Status } from './types';
import axios  from 'axios';
import { IitemsSliceState } from './types';
import { PayloadAction } from '@reduxjs/toolkit';

type paramsProps = {
  created?: string | null;
  page?: string | null | number;
  author?: string | null;
  location?: string | null;
  q?: string | null;
}

// <IResponseProduct, Partial<paramsProps>>

export const fetchItems = createAsyncThunk<any, paramsProps>(
  `@items/fetchItems`,

  async (params, { fulfillWithValue, rejectWithValue, dispatch }) => {
    const { author, created, location, page, q } = params;
    console.log(params)
    const authorLink = author !== null ? `authorId=${author}&` : "";
    const locationLink = location !== null ? `locationId=${location}&` : "";
    const pageLink = page !== null ? `_page=${page}&_limit=12&` : "_page=1&_limit=12&";
    const qLink = q !== null ? `q=${q}&` : '';
    

    const { data, status,headers } = await axios.get(`https://test-front.framework.team/paintings?${pageLink}${authorLink}${locationLink}${qLink}`)
    if (status < 200 || status >= 300) {
      return rejectWithValue(status)
      
    } else {
      
      if (data.length < 12) {
        dispatch(setCountPages(1))
        dispatch(setCurrentPages(1))
      } else {
        dispatch(setCountPages(headers['x-total-count']))
      }
      const authorId: number[] = [];
      await data.map((obj: any) => authorId.push(obj.authorId))
      const authorString = authorId.reduce((ac, cur) => ac + `id=${cur}&`, "")
      const linkAuthors = 'https://test-front.framework.team/authors?'
      const fetchAuthors = await axios.get(`${linkAuthors}${authorString}`)
      data.map((obj: any, i: number) => fetchAuthors.data.map((author: any, id: number) => {
        if (author.id == obj.authorId) {
          obj.author = author.name
        }

        
      })
        
      )

      const linkLocation = 'https://test-front.framework.team/locations?';
      const SearchId: number[] = [];
      await data.map((obj: any) => SearchId.push(obj.locationId))
      const ParamsString = SearchId.reduce((ac, cur) => ac + `id=${cur}&`, "")
      const fetchLocation = await axios.get(`${linkLocation}${ParamsString}`)
      data.map((fullData: any) => fetchLocation.data.map((searchedData: any) => {
        if (searchedData.id == fullData.locationId) {
          fullData.location = searchedData.location
          
        }
      }))
      return fulfillWithValue({ data })
    }
  
    
  }
  
);










const initialState: IitemsSliceState = {
  items: [],
  authorId: "",
  countPages: 10,
  currentPage: 1,
  status: Status.LOADING,
};


export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
      setCountPages(state, action: PayloadAction<number>) {
      state.countPages = action.payload;
      if(state.currentPage > state.countPages) {
        state.currentPage = state.countPages
      }
    },
    setCurrentPages(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
      
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchItems.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    })
    builder.addCase(
      fetchItems.fulfilled, (state, action) => {
        state.items = action.payload.data;
        const authors = action.payload.authorId
        // authors.shift()
        state.authorId = authors
        
      state.status = Status.SUCCESS;
      
    })
    builder.addCase(
      fetchItems.rejected, (state, action) => {
      state.status = Status.ERROR;
        state.items = [];
      console.error(action.error.message)
     
    })
  },
});

export const {setCurrentPages, setCountPages} = itemsSlice.actions


export default itemsSlice.reducer;