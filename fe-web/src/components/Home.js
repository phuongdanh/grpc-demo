import React from "react"
import "../asset/css/pages/home.css"
import { Link } from "react-router-dom";

function Home({isLoading, user, error, logout, books}) {
  console.log(books)
  if (isLoading) {
    return <div className="page_home"><h1>Loading...</h1></div>
  }
  if (error !== "") {
    return (
      <div className="page_home">
        <h1>Fetching data failed</h1>
        <h3>Reason: {error}</h3>
        <Link to="/login" className="btn btn-default">Back to login</Link>
      </div>
    );
  }
  return (
    <div className="page_home">
      <h1>Welcome on the board</h1>
      <div className="profile">
        <div className="card" style={{width: "100%"}}>
          <img className="card-img-top" src={user.getAvatar()} alt="Avatar" style={{ width:"100%"}}/>
          <div className="card-body">
            <h4 className="card-title">{user.getName()}</h4>
            <p className="card-text">{user.getEmail()}</p>
            <div className="pull-right"><span onClick={logout} className="btn btn-secondary">Logout</span></div>
          </div>
        </div>
      </div>
      <div className="list_book">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
          {books.map((book) => (
            <tr>
              <td className="image-cell"><img className="card-img-top" src={book.getImage()} alt="Avatar"/></td>
              <td>{book.getTitle()}</td>
              <td>${book.getPrice()}</td>
              <td>{book.getAuthor().getName()}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home