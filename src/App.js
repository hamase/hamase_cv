import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//Import Components
import LeftMenu from "./components/leftMenu";
import InfoPage from "./components/infoPage";
import EducationPage from "./components/educationPage";
import WorkPage from "./components/workPage";
import SkillPage from "./components/skillPage";
import ProjectPage from "./components/projectPage";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col xs={12} md={2} lg={2} xl={1}>
            <LeftMenu />
          </Col>
          <Col xs={12} md={10} lg={10} xl={11}>
            {/* route to pages */}
            <Switch>
              <Route path="/" component={InfoPage} exact />
              <Route path="/education" component={EducationPage} />
              <Route path="/work" component={WorkPage} />
              <Route path="/skills" component={SkillPage} />
              <Route path="/projects" component={ProjectPage} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
