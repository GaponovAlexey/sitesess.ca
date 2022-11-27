import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: any) => {
  return (
    <div className="m-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
