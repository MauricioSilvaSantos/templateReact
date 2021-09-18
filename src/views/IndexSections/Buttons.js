
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class BasicElements extends React.Component {
  render() {
    return (
      <>
        <section
          className="section section-components pb-0"
          id="section-components"
        >
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              {/* Basic elements */}
              <h2 className="mb-5">
                <span>Maurício</span>
              </h2>
              
            </Col>
          </Row>
        </Container>
        </section>
      </>
    );
  }
}

export default BasicElements;
