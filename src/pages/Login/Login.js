import React from "react";
import "../Login/Login.css";
import Logo from "../../assets/Images/OrionOutlet/OrionOutlet.jpg";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
  from 'mdb-react-ui-kit';

function Login() {

  return (
    <div>
      <MDBContainer fluid>

        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>

            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
              <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5"></p>

                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Login' id='formControlLg' type='email' size="lg" />
                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Senha' id='formControlLg' type='password' size="lg" />
                <button className="dark-button">
                  Login
                </button>
              </MDBCardBody>
            </MDBCard>

          </MDBCol>
        </MDBRow>

      </MDBContainer>


      <div className="text-white bg-dark p-5">
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
