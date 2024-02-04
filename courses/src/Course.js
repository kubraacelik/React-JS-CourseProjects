//! Tek bir kursun basılacağı component
function Course({ id, content, title, price, removeOneCourse }) {
  return (
    <div className="card">
      <div className="cardTitlePrice">
        <h2 className="cardTitle">{title}</h2>
        <h4 className="cardPrice">{price} TL</h4>
      </div>
      <p>{content}</p>
      <div>
        <button className="cardDeleteBtn" onClick={() => removeOneCourse(id)}>
          Sil
        </button>
      </div>
    </div>
  );
}

export default Course;
