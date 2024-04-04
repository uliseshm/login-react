import { MessageForm } from '../components/MessageForm';
import user from './db'

//se recibe la informacion del formulario
export function validateFormData(formData){

    //validamos que no esten vacios los campos
    if(!formData.email || !formData.password){
        //console.log("Campos vacios");
        //<MessageForm message="Campos vacios"/>
        return false;
    }

    //se comprueba que los datos sean correctos
    //para el inicio de sesion
    if(formData.email == user.email && formData.password == user.password)
    return true;

}