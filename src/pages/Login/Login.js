import React from "react";
import "../Login/Login.css";
import Logo from "../../assets/Images/OrionOutlet/OrionOutlet.jpg";

function Login() {
  
  return (
    <div>
      <section className="p-5">
        <div className="container-fluid h-custom">
          <div className=" d-flex justify-content-center align-items-center">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src={Logo} className="img-fluid logo1" alt="Sample" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Digite o login do usuário"
                  />
                  <label className="form-label" for="form3Example3">
                    Login
                  </label>
                </div>
                <div data-mdb-input-init className="form-outline mb-3">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Digite a senha"
                  />
                  <label className="form-label" for="form3Example4">
                    Senha
                  </label>
                </div>

                <div className="d-flex justify-content-between align-items-center"></div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-primary btn-lg Login-button"
                  // onClick={(e) => hendleLogin(e)} //Function to handle login
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>


      <div className="text-white bg-dark p-4">
        <p>
          Copyright ©2024 Gustavo e Camila. Todos os direitos reservados.
          O conteúdo deste site, incluindo texto, imagens, gráficos e outros materiais, é protegido por leis de direitos autorais e outras leis de propriedade intelectual. O conteúdo deste site não pode ser reproduzido, distribuído, transmitido, exibido, publicado ou veiculado sem a autorização prévia por escrito de Gustavo e Camila.
        </p>
        <p>
          Encontrou um problema? Entre em contato conosco, estamos sempre tentando melhorar o nosso sistema
        </p>
      </div>
    </div>
  );
}

export default Login;
