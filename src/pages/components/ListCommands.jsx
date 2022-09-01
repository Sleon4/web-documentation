import { useState } from "react";
import CodeBlock from "./CodeBlock";
import Table from "react-bootstrap/Table";

function ListCommands() {
  const [listCommands, setListCommands] = useState([
    {
      description: "Created command to start server locally",
      command: "php lion serve",
    },
    {
      description: "Command to create run unit tests",
      command: "php lion new:test name_test",
    },
    {
      description: "Command required for the creation of new Capsules",
      command: "php lion new:capsule name_capsule",
    },
    {
      description: "Command required for the creation of new Commands",
      command: "php lion new:command name_command",
    },
    {
      description: "Command required for the creation of new Controllers",
      command: "php lion new:controller name_controller",
    },
    {
      description: "Command required for the creation of new Middleware",
      command: "php lion new:middleware name_middleware",
    },
    {
      description: "Command required for the creation of new Middleware",
      command: "php lion new:middleware name_middleware",
    },
    {
      description: "Command required for the creation of new Models",
      command: "php lion new:model name_model",
    },
    {
      description: "Command required for rule creation",
      command: "php lion new:rule name_rule",
    },
    {
      description: "Created command to generate JWT token",
      command: "php lion token:jwt",
    },
    {
      description: "Command to view a list of available web routes",
      command: "php lion route:list",
    },
    {
      description: "Command to create public and private keys with RSA",
      command: "php lion key:rsa",
    },
  ]);

  return (
    <>
      <Table striped size="sm" variant="dark">
        <thead>
          <tr>
            <th>Description</th>
            <th>Command</th>
          </tr>
        </thead>
        <tbody>
          {listCommands.map((command, index) => (
            <tr key={index}>
              <td>{command.description}</td>
              <td>{command.command}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default ListCommands;