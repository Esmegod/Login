import React, {useState} from 'react'
import {useNavigate} from 'react-router';
import msd5 from "md5"
import Registro from '../pages/registro';
import db from '../firebase/conf';
import {collection, addDoc, query, where, getDocs} from "firebase/firestore"

export default function RegistroContainer(){
    const[form,setForm] = useState({nombre:"",ap:"",am:"",correo:"",contra:"",vcontra:""}); 
    const [validaciones, setValidaciones] = useState({existeCorreo:false, coincideContra: true, passLength: 8})
    const navigate = useNavigate ();


    const onChange = (e)=>{
        //No se que significa esto
        setForm({...form, [e.target.id]:e.target.value});
    }

    //
    const onSubmit = (e)=>{
        e.preventDefault();
        if(!validaciones.existeCorreo /*&& validaciones.coincidePass && validaciones.passLength === 8*/){
            registrar();
        }
    }

    const onBlur = async ()=>{
        if(form.correo !== ""){
            const count = await cuantos("correo", form.correo);
            setValidaciones({...validaciones, existeCorreo: count>0?true:false})
        }
    }

    const validarPass = ()=>{
        if(form.contra !=="" && form.vcontra !== ""){
            const coincide = form.contra===form.vcontra;
            setValidaciones({...validaciones, coincideContra: coincide});
        }
    }

    const validarPassLength= ()=>{
        setValidaciones({...validaciones, passLength: form.contra.length})
    }

    const onPaste = (e)=>{
        e.preventDefault();
    }
    
    //Esta es una consulta
    async function cuantos(tipo, valor){
        const docRef = collection(db, "Usuario");
        const q = query(docRef, where(tipo, "==", valor));
        const querySnapshot = await getDocs(q);
        return querySnapshot.size;
    }

    async function registrar(){
        try {
            const docRef = await addDoc(collection(db, "Usuario"), {
            nombre: form.nombre,
            ap: form.ap,
            am: form.am,
            password: msd5(form.contra),
            correo: form.correo
            });   
            console.log("Document written with ID: ", docRef.id);
            navigate("/");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <Registro form={form} onChange={onChange} onSubmit={onSubmit} onBlur={onBlur} 
        validaciones={validaciones} validarPass={validarPass} onPaste={onPaste}
        validarPassLength={validarPassLength}/>
    )
}