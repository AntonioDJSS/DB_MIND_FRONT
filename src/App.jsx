import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrincipalLayout from "./layouts/PrincipalLayout";
import Crear from "./pages/private/Dashboard/Crear";
import Editar from "./pages/private/Dashboard/Editar";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/public/Login";
import Registrar from "./pages/public/Registrar";
import OlvidePassword from "./pages/public/OlvidePassword";
import NuevoPassword from "./pages/public/NuevoPassword";
import ConfirmarCuenta from './pages/public/ConfirmarCuenta';
import Buscar from "./pages/private/Dashboard/Buscar";
import { AuthProvider } from "./context/AuthProvider";
import { TramiteProvider } from "./context/TramiteProvider";
import Cargar from "./pages/private/Dashboard/Cargar";
import Ver from "./pages/private/Dashboard/Ver";
import EditarBuscar from "./pages/private/Dashboard/EditarBuscar";
import ChatPag from "./pages/private/Dashboard/ChatPag";
import PasswordUser from "./pages/private/Dashboard/User/PasswordUser";
import InformacionUser from "./pages/private/Dashboard/User/InformacionUser";
import InformacionAdmin from "./pages/private/Dashboard/Admin/InformacionAdmin";
import PasswordAdmin from "./pages/private/Dashboard/Admin/PasswordAdmin";
import Page404 from "./pages/public/Page404";
import Proyecto from "./pages/private/Dashboard/Proyecto";
import Landing from "./pages/public/Landing";
import { ProyectoProvider } from "./context/ProyectoProvider";
import CrearCurso from "./pages/private/Dashboard/CrearCurso";
import { CursoProvider } from "./context/CrusoProvider";
import { ViewCurso } from "./pages/private/Dashboard/ViewCurso";
import { Curso } from "./pages/private/Dashboard/Curso";
import RegistroUsuarios from "./pages/private/Dashboard/RegistroUsuarios";
import CrearEvaluación from "./pages/private/Dashboard/CrearEvaluación";
import TestConocimiento from "./pages/private/Dashboard/TestConocimiento";
import ResolverPrueba from "./pages/private/Dashboard/ResolverPrueba";
import Calificacion from "./pages/private/Dashboard/Calificacion";
import SobreNosotros from "./pages/public/SobreNosotros";
import { UsuarioProvider } from "./context/UsuarioProvider";
import { EvaluacionProvider } from "./context/EvaluacionProvider";
import Test from "./pages/private/Dashboard/Test";
import { RespuestaProvider } from "./context/RespuestaProvider";
import MisRespuestas from "./pages/private/Dashboard/MisRespuestas";
import AllRespuestas from "./pages/private/Dashboard/AllRespuestas";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <TramiteProvider>
            <ProyectoProvider>
              <CursoProvider>
                <UsuarioProvider>
                  <EvaluacionProvider>
                    <RespuestaProvider>
              <Routes>
                <Route path="/" element={<AuthLayout />}>
                  <Route index element={<Landing />} />
                  <Route path="sobre-nosotros" element={<SobreNosotros />} />
                  <Route path="login" element={<Login />} />
                  <Route path="login/registrar" element={<Registrar />} />
                  <Route path="login/olvide-password" element={<OlvidePassword />} />
                  <Route
                    path="login/olvide-password/:token"
                    element={<NuevoPassword />}
                  />
                  <Route path="confirmar/:token" element={<ConfirmarCuenta />} />
                </Route>

                <Route path="/dashboard" element={<PrincipalLayout />}>
                  {/* <Route index element={<Buscar />} /> */}
                  <Route index element={<ChatPag />} />
                  <Route path="ver" element={<Ver />} />
                  <Route path="crear" element={<Crear />} />
                  <Route path="editar-buscar" element={<EditarBuscar />} />
                  <Route path="editar" element={<Editar />} />
                  <Route path="cargar" element={<Cargar />} />
                  <Route path="chat" element={<ChatPag />} />
                  <Route path="panel-user" element={<InformacionUser />} />
                  <Route path="password-user" element={<PasswordUser />} />
                  <Route path="panel-admin" element={<InformacionAdmin />} />
                  <Route path="password-admin" element={<PasswordAdmin />} />
                  <Route path="proyecto" element={<Proyecto />} />
                  <Route path="crear-curso" element={<CrearCurso />} />
                  <Route path="cursos" element={<ViewCurso />} />
                  <Route path="cursos/:id" element={<Curso />} />
                  <Route path="allusers" element={<RegistroUsuarios />} />
                  <Route path="crear-evaluacion" element={<CrearEvaluación />} />
                  <Route path="test-conocimientos" element={<TestConocimiento />} />
                  <Route path="test-conocimientos/:id" element={<Test />} />
                  <Route path="calificaciones-list" element={<MisRespuestas />} />
                  <Route path="calificaciones-list-admin" element={<AllRespuestas />} />
                  <Route path="evaluacion" element={<ResolverPrueba />} />
                  <Route path="calificacion" element={<Calificacion />} />

                </Route>

                <Route path="*" element={<Page404 />} />
              </Routes>
              </RespuestaProvider>
              </EvaluacionProvider>
              </UsuarioProvider>
              </CursoProvider>
            </ProyectoProvider>
          </TramiteProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
