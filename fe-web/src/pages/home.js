import React, { useState, useEffect, useContext } from "react"
import HomeComponent from "../components/Home"
import { store } from '../store/store.js'
import Config from "../utils/config"
import CookieHelper from "../utils/cookieHelper"
import { Redirect } from "react-router-dom"
const {UserClient} = require('../protos/user_service_grpc_web_pb.js')
const {BookClient} = require('../protos/book_service_grpc_web_pb.js')
require("../protos/user_service_pb.js")
require("../protos/user_message_pb.js")
require("../protos/book_service_pb.js")
require("../protos/book_message_pb.js")

/* eslint-disable */
function Home() {
  const globalState = useContext(store)
  const { dispatch } = globalState
  const [isLoading, setIsLoading] = useState(true)
  const [userObject, setUserObject] = useState({})
  const [books, setBooks] = useState([])
  const [error, setError] = useState("")
  const [redirect, setRedirect] = useState(null)

  var userService = new UserClient(Config.API_URL_SERVER_1)
  var bookService = new BookClient(Config.API_URL_SERVER_2)
  var getUserReq = new proto.protos.GetUserRequest()
  var listBookReq = new proto.protos.ListBookRequest()
  getUserReq.setId(1)
  var metadata = {
    "Authorization": "Bearer " + globalState.accessToken
  };

  useEffect(() => {
    if (isLoading) {
      (async () => {
        await userService.get(getUserReq, metadata, function(err, response) {
          if (err) {
            setError(err.message)
          } else {
            setUserObject(response.getData())
          }
        });
        bookService.list(listBookReq, {}, function(err, response) {
          if (err) {
            setError(err.message)
          } else {
            console.log(response.getDataList())
            setBooks(response.getDataList())
          }
          setIsLoading(false)
        });
      })()
    }
  })

  const logout = (e) => {
    e.preventDefault()
    const cookieHelper = new CookieHelper()
    cookieHelper.SetValue("accessToken", "")
    dispatch({type: "LOGOUT"})
    setRedirect("/login")
  }
  if (redirect !== null) {
    return <Redirect to={redirect}/>
  }
  return (
    <HomeComponent isLoading={isLoading} user={userObject} error={error} books={books} logout={logout}/>
  );
}

export default Home