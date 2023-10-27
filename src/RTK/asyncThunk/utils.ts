import axios from "axios";


export const fetchAuthorsAndLocations = async (data: any[], link: string,dataMethod: any, searchedMethod: any) => {
    const SearchId: number[] = [];
      await data.map((obj: any) => SearchId.push(obj.locationId))
      const ParamsString = SearchId.reduce((ac, cur) => ac + `id=${cur}&`, "")
      const fetchLocation = await axios.get(`${link}?${ParamsString}`)
      data.map((fullData: any) => fetchLocation.data.map((searchedData: any) => {
        if (searchedData.id == fullData.locationId) {
            const finalData = searchedData + fullData
            return finalData
        }
      }))
}