import "./StyleRec.css"
const Recommend = ({handleClick}) => {
  return (
    <section className="re-container">
        <div>
            <h1 className="recommend">Recommend</h1>
        </div>

        <div className="btns-container">
            <button className="btn" onClick={handleClick} value="">All Product</button>
            <button className="btn" onClick={handleClick} value="Nike">Nike</button>
            <button className="btn" onClick={handleClick} value="Adidas">Adidas</button>
            <button className="btn" onClick={handleClick} value="Puma">Puma</button>
            <button className="btn" onClick={handleClick} value="Vans">Vans</button>
        </div>
    </section>
  )
}

export default Recommend