import axios from "axios";

export function makeRequest(url) {
  return new Promise((resolve) => {
    if (url) {
      axios
        .get(url, { validateStatus: false })
        .then((res) => {
          const response = res.data;
          // console.log(response);
          resolve(response);
        })
        .catch(function (error) {
          // handle error
          console.log("error fre=om http utils", error);
          resolve({ error: true, errorDetails: error });
        });
    }
  });
}
