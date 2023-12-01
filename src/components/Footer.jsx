import "../styles/estilosFooter.css";
import "boxicons";

function Footer() {
  return (
    <section id="contacto">
      <div className="content">
        <h1 className="logo">
          Contáctame
        </h1>

        <div className="contact-wrapper">
          <div className="contact-form">
           <br></br>
            <form action="https://formsubmit.co/jonatanpacora@gmail.com" method="POST">
              <p>
                <label>Nombre</label>
                <input type="text" name="fullname" />
              </p>
              <p>
                <label>Email</label>
                <input type="email" name="email" />
              </p>
              <p>
                <label>Celular</label>
                <input type="tel" name="phone" />
              </p>
              <p>
                <label>Asunto</label>
                <input type="text" name="affair" />
              </p>
              <p className="block">
                <label>Mensaje</label>
                <textarea name="message" rows="3"></textarea>
              </p>
              <p className="block">
                <input type="submit" value="Enviar" className="boton"></input>
              </p>
            </form>
          </div>
          <div className="contact-info">
            <h4>Mas Información</h4>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i> Jonatan Pacora Vega
              </li>
              <li>
                <i className="fas fa-phone"></i> (+51) 948 018 183
              </li>
              <li>
                <i className="fas fa-envelope-open-text"></i> jonatanpacora@gmail.com
              </li>
            </ul>
            
            
          
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
