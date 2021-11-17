// a library to wrap and simplify api calls
import { ApiResponse, create as apicreate } from 'apisauce'
import { from, Observable } from 'rxjs'
import Config from 'react-native-config'

export interface WcsSecureApi {
  api: any
}

// our "constructor"
export const createAPI = (baseURL = `${Config.BASE_URL}`): WcsSecureApi => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apicreate({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache="set-cookie, set-cookie2"',
    },
    // 10 second timeout...
    timeout: 10000,
  })

  const reportsApi = apicreate({
    // base URL is read from the "constructor"
    baseURL: `${Config.REPORTS_BASE_URL}`,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache="set-cookie, set-cookie2"',
    },
    // 10 second timeout...
    timeout: 10000,
  })

  return {
    // a list of the API functions from step 2
    api,
  }
}

export default {
  create: createAPI(),
}
