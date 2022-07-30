// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDcuucqChoFO-oXV3tt4gQdkiZgGkOFrzY",
//   authDomain: "club-de-lectura-64ef7.firebaseapp.com",
//   projectId: "club-de-lectura-64ef7",
//   storageBucket: "club-de-lectura-64ef7.appspot.com",
//   messagingSenderId: "669564016100",
//   appId: "1:669564016100:web:818700685d16babb3d63f1",
//   measurementId: "G-BQ0BWZG4GJ",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      // methods: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      bestBooksYear: [],
      searchGoogle: [],
      favorites: [],
      isOpen: false,
      rapidApiKey: "2bbe72fbccmsh6793c5e8593d9fdp11e794jsn1087e08285d2",
      searchBody: [],
      bestsBooks: [],
      loginError: null,
      token: null,
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      deleteFavoriteElement: async (element) => {
        const store = getStore();
        setStore({
          favorites: [...store.favorites].filter((x) => x != element),
        });
      },
      addFavoriteElement: async (element) => {
        const store = getStore();
        const search = store.favorites.find((x) => x == element);
        console.log(search, element);
        if (search == undefined) {
          setStore({
            favorites: [...store.favorites, element],
          });
        }
      },
      toggleModal: async () => {
        this.setState({
          isOpen: !this.state.isOpen,
        });
      },
      search: async (inputValue) => {
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": getStore().rapidApiKey,
            "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
          },
        };
        try {
          const response = await fetch(
            `https://hapi-books.p.rapidapi.com/search/${inputValue}`,
            options
          );
          const body = await response.json();
          if (response.status !== 200) {
            return false;
          }
          console.log(body);
          setStore({
            searchBody: body,
          });
        } catch (error) {
          console.error("There has an error login in");
        }
      },
      mostPopular: async () => {
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": getStore().rapidApiKey,
            "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
          },
        };
        try {
          const response = await fetch(
            `https://hapi-books.p.rapidapi.com/month/2022/3`,
            options
          );
          const body = await response.json();
          if (response.status !== 200) {
            return false;
          }
          console.log(body);
          setStore({
            bestsBooks: body,
          });
        } catch (error) {
          console.error("There has an error loading 15 most popular books");
        }
      },
      syncTokenFromSessionStore: () => {
        const token = sessionStorage.getItem("token");
        console.log(
          "Aplication just loaded, synching the session storage token"
        );
        if (token && token != "" && token != undefined)
          setStore({ token: token });
      },
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      signUp: async (requestBody) => {
        try {
          if (requestBody.password == "" || requestBody.email == "")
            return false;
          const response = await fetch(process.env.BACKEND_URL + "/api/users", {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (response.status !== 200) {
            return false;
          }
        } catch (error) {
          console.error("There has an error login in");
        }
      },
      carouselBook: async () => {
        try {
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=BestBooksOf2021&key=AIzaSyBl8fMSLm787M_HncAHXLd_yRz7V8wlXdI`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const body = await response.json();
          if (response.status !== 200) {
            return false;
          }
          console.log(body.items);
          setStore({
            bestBooksYear: body.items,
          });
        } catch (error) {
          console.error("There has an error loading GoogleBooks in");
        }
      },
      googleBooks: async (nameBook) => {
        try {
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${nameBook}&key=AIzaSyBl8fMSLm787M_HncAHXLd_yRz7V8wlXdI`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const body = await response.json();
          if (response.status !== 200) {
            return false;
          }
          console.log(body.items);
          setStore({
            searchGoogle: body.items,
          });
        } catch (error) {
          console.error("There has an error loading GoogleBooks in");
        }
      },
      syncTokenFromSessionStore: () => {
        const token = sessionStorage.getItem("token");
        console.log(
          "Aplication just loaded, synching the session storage token"
        );
        if (token && token != "" && token != undefined)
          setStore({ token: token });
      },
      logout: () => {
        sessionStorage.removeItem("token");
        console.log("Log Out");
        setStore({ token: null });
      },
      login: async (email, password) => {
        const opts = {
          // mode: "no-cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/token",
            opts
          );
          if (resp.status !== 200) {
            alert("there has been error!");
            setStore({ loginError: "Verifique sus credenciales" });
            return false;
          }
          const data = await resp.json();
          console.log("this came from the backend", data);
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error("There has an error login in");
        }
      },
      getMessage: async () => {
        const store = getStore();
        try {
          const opts = {
            headers: {
              Authorization: "Bearer " + store.token,
            },
          };
          // fetching data from the backend
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/private",
            opts
          );
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      // handleClick: async () => {
      //   const opts = {
      //     methods: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       email: email,
      //       password: password,
      //     }),
      //   };
      //   try{
      //     const response = await fetch(process.env.BACKEND_URL + "/api/token")
      //     const data = await response.json()
      //     setStore({})
      //     return data;
      //   }
      //     .then((data) => {
      //       console.log("this came from the backend", data);
      //       sessionStorage.setItem("token", data.access_token);
      //     })
      //     .catch((error) => {
      //       console.error("WARNING ERROR!", error);
      //     });
      // },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
