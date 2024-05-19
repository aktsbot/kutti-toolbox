import Nav from "./Nav";

function Layout(props) {
  return (
    <>
      <Nav />
      <div className="container">{props.children}</div>
    </>
  );
}

export default Layout;
