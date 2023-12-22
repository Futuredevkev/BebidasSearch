import { Button, Form, Row, Col, FormGroup, Alert } from "react-bootstrap";
import useCategorias from "../hooks/useCategorias";
import useBebidas from "../hooks/useBebidas";
import { useState } from "react";

export default function Formulario() {

    const {categorias} = useCategorias()
    const {consultarBebida} = useBebidas()
    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })
    
    const [alerta, setAlerta] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        
        if(Object.values(busqueda).includes('')) {
            setAlerta('Todos los campos son obligatorios')
            return
        }

        setAlerta('')
        consultarBebida(busqueda)
    }

  return (
    <Form onSubmit={handleSubmit}>
    {alerta && <Alert variant="danger" className="text-center">{alerta}</Alert>}
      <Row>
        <Col md={6}>
          <FormGroup className="mb-3">
            <Form.Label htmlFor="nombre">Nombre Bebida</Form.Label>

            <Form.Control
              type="text"
              placeholder="Ej: Tequila, Vodka, ETC"
              name="nombre"
              id="nombre"
              value={busqueda.nombre}
              onChange={e => setBusqueda({
                ...busqueda,
                [e.target.name] : e.target.value
              })}
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup className="mb-3">
            <Form.Label htmlFor="categoria">Categoria Bebida</Form.Label>

            <Form.Select id="categoria" name="categoria"  value={busqueda.categoria}
            onChange={e => setBusqueda({
              ...busqueda,
              [e.target.name] : e.target.value
            })}>
                <option>- Seleccionar Categoria- </option>
                {categorias.map(categoria => (
                    <option key={categoria.strCategory} value={categoria.strCategory}>
                        {categoria.strCategory}
                    </option>
                ))}
            </Form.Select>

          </FormGroup>
        </Col>
      </Row>

      <Row className="justify-content-end">
            <Col md={3}>
                    <Button variant='danger' type="submit" className="text-uppercase w-100">
                        Buscar Bebidas
                    </Button>
            </Col>
      </Row>
    </Form>
  );
}
