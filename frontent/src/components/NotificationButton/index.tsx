import axios from 'axios';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../api';
import icon from '../../assets/img/notification-icon.svg'
import "./styles.css"

type NotificationButtonProps ={
    saleid: number;
}

function handleNotitification(saleid :number){
    axios(`${BASE_URL}/sales/${saleid}/notification`)
    .then(response =>{
        toast.info("SMS enviado com sucesso")
    })
}

function NotificationButton({saleid}: NotificationButtonProps) {
    return (
        <>
            <div 
            className="dsmeta-red-btn"
            onClick={()=> {
                handleNotitification(saleid)
            }}  
            >
                <img src={icon} alt="" />
            </div>        
        </>
    )
}

export default NotificationButton 