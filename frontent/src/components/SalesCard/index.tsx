import axios from 'axios'
import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { BASE_URL } from '../../api'
import { Sale } from '../../models/sales'

import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {

    const [dateIni, setDateIni] = useState(new Date());
    const [dateEnd, setDateEnd] = useState(new Date());
    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {
        const dmin = dateIni.toISOString().slice(0, 10);
        
        
        const dmax = dateEnd.toISOString().slice(0, 10);
        
        const url = `${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`;
        
        axios.get(url)   
            .then(response => {                                         
                setSales(response.data.content)
            });
    }, [dateIni,dateEnd]);

    return (
        <>
            <div className="dsmeta-card">
                <h2 className="dsmeta-sales-title">Vendas</h2>
                <div>
                    <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={dateIni}
                            onChange={(date: Date) => setDateIni(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={dateEnd}
                            onChange={(date: Date) => setDateEnd(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        /> 
                    </div>
                </div>

                <div>
                    <table className="dsmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="show992">ID</th>
                                <th className="show576">Data</th>
                                <th>Vendedor</th>
                                <th className="show992">Visitas</th>
                                <th className="show992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sales.map(sale => {
                                return (
                                    <tr key={sale.id}>
                                        <td className="show992">{sale.id}</td>
                                        <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                                        <td>{sale.sellerName}</td>
                                        <td className="show992">{sale.deals}</td>
                                        <td className="show992">{sale.visited}</td>
                                        <td>R$ {sale.amount.toFixed(2)}</td>
                                        <td>
                                            <div className="dsmeta-red-btn-container">
                                                <NotificationButton saleid={sale.id} />
                                            </div>
                                        </td>
                                    </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default SalesCard