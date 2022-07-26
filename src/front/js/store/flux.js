const getState = ({ getStore, getActions, setStore }) => {
  const GOOGLE_KEY = "AIzaSyCS--0IpOf_rxyKoLNzSp6iv-vjRmsEy28";
  return {
    store: {
      searchAddress: [],
      getExchangeVisit: [],
      getWantReadVisit: [],
      profile: [],
      bodySearch: [],
      getExchange: [],
      exchangeBook: [],
      getWantRead: [],
      bookComments: [],
      commentBody: [],
      comments: [],
      singleUser: [],
      commentUser: [],
      bestBooksYear: [],
      loveBooks: [],
      searchGoogle: [],
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
      frases: [],
    },
    actions: {
      // singleUser variable siempre activa:
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
            console.log("No pudimos cargar los usuarios");
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
      // 1.SignUp
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
      // End SignUp component.......................................................................................
      //2. LogIn:
      login: async (userName, password) => {
        const actions = getActions();
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
          actions.getSingleUser();
          return true;
        } catch (error) {
          console.error("There has an error login in");
        }
      },
      //3.Token:
      syncTokenFromSessionStore: () => {
        const token = sessionStorage.getItem("token");
        console.log(
          "Aplication just loaded, synching the session storage token"
        );
        if (token && token != "" && token != undefined)
          setStore({ token: token });
      },
      // End LogIn component..................................................................................................

      // 4.NavBar component:
      logout: () => {
        sessionStorage.removeItem("token");
        console.log("Log Out");
        setStore({ token: null });
      },
      // End Navbar component..................................................................................................

      // 5.Home component:
      getLoveBooks: async () => {
        try {
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=+subject:love&key=${GOOGLE_KEY}`,
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
      carouselBook: async () => {
        try {
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=BestBooksOf2021&key=${GOOGLE_KEY}`,
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
          console.error("There has an error loading carouselBook in");
        }
      },
      // Message Back-End if you need token:
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
      googleBooks: async (nameBook) => {
        try {
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${nameBook}&key=${GOOGLE_KEY}&maxResults=40`,
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
      // End Home component.....................................................................................................

      // 6.Search component:
      getSearchUser: async (param) => {
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/search?name=${param}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${getStore().token}`,
                "Content-Type": "application/json",
              },
            }
          );
          const body = await response.json();
          if (response.status !== 200) {
            alert("No pudimos cargar los usuarios");
            return;
          }
          console.log(body);
          setStore({
            bodySearch: body,
          });
        } catch (error) {
          alert("error en getSearchUser");
        }
      },
      //End Search component............................................................................................

      //7.SearchAddress component:
      getSearchAddress: async (param) => {
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/search_address?name=${param}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${getStore().token}`,
                "Content-Type": "application/json",
              },
            }
          );
          const body = await response.json();
          if (response.status !== 200) {
            alert("No pudimos cargar los usuarios");
            return;
          }
          console.log(body);
          setStore({
            searchAddress: body,
          });
        } catch (error) {
          alert("error en getSearchUser");
        }
      },
      //End SearchAddress component............................................................................................

      // 8.SingleBook component:
      addWantReadElement: async (googleBooksId, cover, name) => {
        const store = getStore();
        const auxObject = {
          google_books_id: googleBooksId,
          book_cover: cover,
          book_name: name,
        };
        try {
          const opts = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${store.token}`,
            },
            body: JSON.stringify(auxObject),
          };
          const resp = await fetch(
            `${process.env.BACKEND_URL}/api/users/want_read/${googleBooksId}`,
            opts
          );
          const body = await resp.json();
          // const commentsData = Object.keys()
          const search = store.wantRead.find((x) => x == googleBooksId);
          console.log(search, googleBooksId);
          if (search == undefined) {
            setStore({ wantRead: [...store.wantRead, googleBooksId] });
          }
          // getActions().getComments(commentBody.google_books_id);
          // fetching data from the backend
          console.log(body);
          // don't forget to return something, that is how the async resolves
          // return store.commentBody;
          return body;
        } catch (error) {
          console.log("Error loading message from backend ", error);
        }
      },
      addExchageBook: async (googleBooksId, cover, name) => {
        const store = getStore();
        const auxObject = {
          google_books_id: googleBooksId,
          book_cover: cover,
          book_name: name,
        };
        try {
          const opts = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${store.token}`,
            },
            body: JSON.stringify(auxObject),
          };
          const resp = await fetch(
            `${process.env.BACKEND_URL}/api/users/exchange_books/${googleBooksId}`,
            opts
          );
          const body = await resp.json();
          // const commentsData = Object.keys()
          const search = store.exchangeBook.find((x) => x == googleBooksId);
          console.log(search, googleBooksId);
          if (search == undefined) {
            setStore({ exchangeBook: [...store.exchangeBook, googleBooksId] });
          }
          // getActions().getComments(commentBody.google_books_id);
          // fetching data from the backend
          console.log(body);
          // don't forget to return something, that is how the async resolves
          // return store.commentBody;
          return body;
        } catch (error) {
          console.log("Error loading message from backend ", error);
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
      //End SingleBook component............................................................................................

      // 9.UserProfile && VisitProfile Component:
      // Esta Funcion tambien se usa en VisitProfile{getProfile()}
      getProfile: async (userId) => {
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/users/${userId}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${getStore().token}`,
                "Content-Type": "application/json",
              },
            }
          );
          const body = await response.json();
          if (response.status !== 200) {
            alert("No pudimos cargar los usuarios");
            return;
          }
          console.log(body);
          setStore({
            profile: body,
          });
        } catch (error) {
          alert("fallo en getProfile");
        }
      },
      getWantReadElement: async () => {
        const store = getStore();
        try {
          const options = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${store.token}`,
            },
          };
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/users/want_read`,
            options
          );
          const data = await response.json();
          console.log(data);
          setStore({
            getWantRead: data,
          });
        } catch (error) {
          console.log("hubo un error getWantReadElement");
        }
      },
      deleteWantRead: async (userId) => {
        const store = getStore();
        try {
          const options = {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${store.token}`,
            },
          };
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/users/want_read/${userId}`,
            options
          );
          const data = await response.json();
          console.log(data);
          setStore({
            getWantRead: [...store.getWantRead].filter((x) => x != element),
          });
          return data;
        } catch (error) {
          console.log("hubo un error deleteWantRead");
        }
      },
      getExchangeBooks: async () => {
        const store = getStore();
        try {
          const options = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${store.token}`,
            },
          };
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/users/exchange_books`,
            options
          );
          const data = await response.json();
          console.log(data);
          setStore({
            getExchange: data,
          });
        } catch (error) {
          console.log("hubo un error getExchangeBook");
        }
      },
      deleteExchangeBook: async (userId) => {
        const store = getStore();
        try {
          const options = {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${store.token}`,
            },
          };
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/users/exchage_books/${userId}`,
            options
          );
          const data = await response.json();
          console.log(data);
          setStore({
            getExchange: [...store.getExchange].filter((x) => x != element),
          });
          return data;
        } catch (error) {
          console.log("hubo un error deleteExchangeBook");
        }
      },
      //End UserProfile..................................................................................................

      // 10.VisitProfile component:
      getWantReadVisit: async (userId) => {
        const store = getStore();
        try {
          const options = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${store.token}`,
            },
          };
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/users/want_read/${userId}`,
            options
          );
          const data = await response.json();
          console.log(data);
          setStore({
            getWantReadVisit: data,
          });
        } catch (error) {
          console.log("hubo un error getWantReadElement");
        }
      },
      getExchangeBooksVisit: async (userId) => {
        const store = getStore();
        try {
          const options = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${store.token}`,
            },
          };
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/users/exchange_books/${userId}`,
            options
          );
          const data = await response.json();
          console.log(data);
          setStore({
            getExchangeVisit: data,
          });
        } catch (error) {
          console.log("hubo un error getExchangeBooksVisit");
        }
      },
      //End VisitProfile..................................................................................................
      //GoogleMaps Fetch appContext:
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
    },
  };
};

export default getState;
