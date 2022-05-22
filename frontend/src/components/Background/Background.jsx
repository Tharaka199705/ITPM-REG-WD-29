const Background = ({ children, title }) => {
  return (
    <div className="vh-100 bg-blue p-4">
      <div className="text-white fs-2">{title}</div>
      <div className="w-100 border bg-white mt-2"></div>
      <div className="w-100 ">{children}</div>
    </div>
  );
};

export default Background;
