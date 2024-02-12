function MenuItem({ name, image, content, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1 style={{ marginBottom: "10px" }}>{name}</h1>
      <h6 style={{ marginTop: "20px" }}>{content}</h6>
      <p style={{ color: "red", fontWeight: "bold" }}>{price} TL</p>
    </div>
  );
}

export default MenuItem;
