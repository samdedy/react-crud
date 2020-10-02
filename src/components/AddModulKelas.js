import React, { Component } from 'react'
import API from '../axios/Api'

export default class AddModulKelas extends Component {

    state = {
        'pelajaran': '',
        'sesi': '',
        'jam': ''
    }

    handlerChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handlerSubmit = async (event) => {
        event.preventDefault()

        var bodyFormData = new FormData();
        bodyFormData.append('pelajaran',this.state.pelajaran);
        bodyFormData.append('sesi',this.state.sesi);
        bodyFormData.append('jam',this.state.jam);

        await API.post('/jadwal_batch/add',bodyFormData)
            .catch(error => { console.log('error', error); });

        this.props.history.push('/')
    }

    render() {
        return (
            <div className="container">
                <h2>Tambah Modul Kelas</h2>

                <form onSubmit={this.handlerSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Pelajaran</td>
                                <td><input type="text" name="pelajaran" onChange={this.handlerChange} /></td>
                            </tr>
                            <tr>
                                <td>Sesi</td>
                                <td><input type="text" name="sesi" onChange={this.handlerChange} /></td>
                            </tr>
                            <tr>
                                <td>Jam</td>
                                <td><input type="text" name="jam" onChange={this.handlerChange} /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><input type="submit" value="Add" className="btn btn-primary" /></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}
