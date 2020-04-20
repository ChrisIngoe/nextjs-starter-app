import React, { memo, useState, useContext } from 'react';
import {
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import UserContext from '../../../components/hooks/userContext';

const LoginPage = memo(props => {
  const { isOpen, toggle } = props;
  const { signIn } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = e => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    signIn(username, password);
  };

  return (
    <Card className="w-25 box-shadow">
      <CardBody>
        <Form action="/page/profile" method="POST">
          <fieldset>
            <legend className="text-primary bg-gradient-primary font-weight-bold uppercase">
              <h3 className="mt-2 ml-3 text-light text-center">Login</h3>
            </legend>
            <FormGroup>
              <Label for="exampleInputEmail3">Email address</Label>
              <Input
                type="email"
                className="form-control"
                id="exampleInputEmail3"
                aria-describedby="emailHelp"
                onChange={e => setUsername(e.target.value)}
              />
              <small id="emailHelp" className="form-text text-muted"></small>
            </FormGroup>
            <FormGroup>
              <Label for="exampleInputPassword3">Password</Label>
              <Input
                type="password"
                className="form-control"
                id="exampleInputPassword3"
                onChange={e => setPassword(e.target.value)}
              />
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck3"
              />
              <Label check for="exampleCheck3">
                Check me out
              </Label>
            </FormGroup>
          </fieldset>
          <Button
            color="primary"
            block
            size="lg"
            className="mt-2"
            onClick={e => loginHandler(e)}
          >
            Submit
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
});

export default LoginPage;
