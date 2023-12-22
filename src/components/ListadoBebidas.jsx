import useBebidas from "../hooks/useBebidas"
import { Row } from 'react-bootstrap'
import Bebida from "./Bebida"

export default function ListadoBebidas() {

    const { bebidas } = useBebidas()

  return (
    <Row className="mt-5">
        {bebidas.map(bebida => (
            <Bebida bebida={bebida} key={bebida.idDrink}/>
        ))}
    </Row>
  )
}
