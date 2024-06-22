import CustomLink from "./CustomLink";
import Form from "./Form";
const Container = () => {
  return (
    <>
      <main>
        <div className="container">
          <div className="form">
            <h1>MiniUrl</h1>
            <Form />
            <CustomLink />
          </div>
        </div>
      </main>
    </>
  );
};

export default Container;
