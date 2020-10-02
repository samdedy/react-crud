import React from 'react'
import { Link } from 'react-router-dom'
import API from '../axios/Api'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'


function DataTable({ listModul, refresh }) {
    async function deletelistModul() {
        var bodyFormData = new FormData();
        bodyFormData.append('id',listModul.id);
        await API.post('/jadwal_batch/delete',bodyFormData)
            .catch(error => { console.log('error', error); });
        return refresh()
    }

    function deleteConfirm() {
        confirmAlert({
            title: 'Data Mahasiswa',
            message: "Apakah anda ingin menghapus NIM: " + listModul.pelajaran + " ? ",
            buttons: [
                {
                    label: 'OKE DELETE',
                    onClick: () => deletelistModul()
                },
                {
                    label: 'NO',
                    onClick: () => { }
                },
            ]
        })
    }

    return (
        <tr>
            <td>{listModul.pelajaran}</td>
            <td>{listModul.sesi}</td>
            <td>{listModul.jam}</td>
            <td>
                <Link to={"/edit/" + listModul.id}>
                <button className="btn btn-primary">Edit</button>
                </Link> 
                || 
                <Link to="/">
                    <button className="btn btn-danger" onClick={deleteConfirm}>Delete</button>
                </Link>
            </td>
        </tr>
    )
}

export default DataTable
