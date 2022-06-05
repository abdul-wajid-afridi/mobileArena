// import axios from "axios";

// const request = () => {
//   let instance = axios.create();
//   /// Before Request
//   instance.interceptors.request.use((config) => {
//     const token = localStorage.getItem("token");
//     config.headers.Authorization = token ? `Bearer ${token}` : null;
//     return config;
//   });

//   instance.interceptors.response.use(
//     (response) => {
//       return response;
//     },
//     (error) => {
//       if (error.response.status == 401) {
//         window.location.href = "/login";
//       }
//     }
//   );

//   return instance;
// };
// export default request();

// if any error then change above

import axios from "axios";

let token = localStorage.getItem("token");

const request = () => {
  let instance = axios.create();
  /// Before Request
  instance.interceptors.request.use((config) => {
    config.headers.Authorization = token ? `Bearer ${token}` : null;
    return config;
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status == 401) {
        window.location.href = "/login";
      }
    }
  );

  return instance;
};
export default request();
