const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      bookComments: [],
      commentBody: [],
      comments: [],
      singleUser: [],
      commentUser: [],
      bestBooksYear: [],
      loveBooks: [],
      searchGoogle: [],
      favorites: [],
      wantRead: [],
      isOpen: false,
      searchBody: [],
      bestsBooks: [],
      loginError: null,
      token: null,
      message: null,
      userPosition: {
        latitude: undefined,
        longitude: undefined,
      },
    },
    actions: {
      getSingleUser: async () => {
        try {
          const response = await fetch(`${process.env.BACKEND_URL}/api/users`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${getStore().token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(),
          });
          const body = await response.json();
          if (response.status !== 200) {
            alert("No pudimos cargar los usuarios");
            return;
          }
          console.log(body);
          setStore({
            singleUser: body,
          });
        } catch (error) {
          alert("promesa rechazada, servidor caido");
        }
      },
      getComments: async (element) => {
        try {
          const options = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          };
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/comments/${element}`,
            options
          );
          const data = await response.json();
          console.log(data);
          // const aux = [
          //   ...getStore().bookComments,
          //   {

          //   },
          // ];
          setStore({
            bookComments: data,
          });
        } catch (error) {
          console.log("hubo un error getComments");
        }
      },
      addComment: async (data) => {
        console.log(data, "linea 56");
        const store = getStore();
        try {
          const opts = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${store.token}`,
            },
            body: JSON.stringify(data),
          };
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/comment",
            opts
          );
          const body = await resp.json();
          // const commentsData = Object.keys()
          setStore({ commentBody: body });

          // getActions().getComments(commentBody.google_books_id);
          // fetching data from the backend
          console.log(resp);
          // don't forget to return something, that is how the async resolves
          // return store.commentBody;
        } catch (error) {
          console.log("Error loading message from backend ", error);
        }
      },
      // addComent: async (element) => {
      //   try{

      //   }
      //   // const store = getStore();
      //   // const commentsStore = store.comments;
      //   // console.log(comments);
      //   // setStore({
      //   //   comments: [...commentsStore, element],
      //   // });
      // },
      deleteFavoriteElement: (element) => {
        const store = getStore();
        setStore({
          favorites: [...store.favorites].filter((x) => x != element),
        });
      },
      addFavoriteElement: (element) => {
        const store = getStore();
        const search = store.favorites.find((x) => x == element);
        console.log(search, element);
        if (search == undefined) {
          setStore({
            favorites: [...store.favorites, element],
          });
        }
      },
      addWantReadElement: (element) => {
        const store = getStore();
        const search = store.wantRead.find((x) => x == element);
        console.log(search, element);
        if (search == undefined) {
          setStore({
            wantRead: [...store.wantRead, element],
          });
        }
      },
      toggleModal: async () => {
        this.setState({
          isOpen: !this.state.isOpen,
        });
      },
      // syncTokenFromSessionStore: () => {
      //   const token = sessionStorage.getItem("token");
      //   console.log(
      //     "Aplication just loaded, synching the session storage token"
      //   );
      //   if (token && token != "" && token != undefined)
      //     setStore({ token: token });
      // },
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      signUp: async (requestBody) => {
        try {
          if (
            requestBody.password == "" ||
            requestBody.email == "" ||
            requestBody.userName == ""
          )
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
      getLoveBooks: async () => {
        try {
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=+subject:love&key=AIzaSyBl8fMSLm787M_HncAHXLd_yRz7V8wlXdI`,
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
            loveBooks: body.items,
          });
        } catch (error) {
          console.error("There has an error loading love Books");
        }
      },
      googleBooks: async (nameBook) => {
        try {
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${nameBook}&key=AIzaSyBl8fMSLm787M_HncAHXLd_yRz7V8wlXdI&maxResults=40`,
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
      login: async (userName, password) => {
        const opts = {
          // mode: "no-cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_name: userName,
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
      getUserPosition: () => {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            setStore({
              userPosition: {
                latitude: lat,
                longitude: long,
              },
            });
          },
          function (error) {
            console.log("error", error);
          }
        );
      },
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
