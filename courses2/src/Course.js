//! Tek bir kursun basılacağı component
function Course({ content, title, price }) {
  return (
    <div className="card">
      <div className="cardTitlePrice">
        <h2 className="cardTitle">{title}</h2>
        <h4 className="cardPrice">{price} TL</h4>
      </div>
      <p>{content}</p>
      <div></div>
    </div>
  );
}

export default Course;
