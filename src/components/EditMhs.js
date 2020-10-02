import React, { Component } from 'react'
import API from '../axios/Api'

export class EditMhs extends Component {

    state = {
        id: '',
        pelajaran: '',
        sesi: '',
        jam: ''
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id
        const res = await API.get('/jadwal_batch/detail?id=' + id)
        this.setState({
            id: res.data.data.jadwal_batch.id,
            pelajaran: res.data.data.jadwal_batch.pelajaran,
            sesi: res.data.data.jadwal_batch.sesi,
            jam: res.data.data.jadwal_batch.jam
        })
    }

    handlerChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handlerSubmit = async (event) => {
        event.preventDefault()

        var bodyFormData = new FormData();
        bodyFormData.append('id',this.state.id);
        bodyFormData.append('pelajaran',this.state.pelajaran);
        bodyFormData.append('sesi',this.state.sesi);
        bodyFormData.append('jam',this.state.jam);

        await API.post('/jadwal_batch/update', bodyFormData)
            .catch(error => { console.log('error', error); });

        this.props.history.push('/')
    }

    render() {

        const { pelajaran, sesi, jam} = this.state

        return (
            <div className="container">
                <h2>Edit Modul Kelas</h2>

                <form onSubmit={this.handlerSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Pelajaran</td>
                                <td>
                                    <input type="text" className="form-control" value={pelajaran} name="pelajaran" onChange={this.handlerChange} required />
                                </td>
                            </tr>
                            <tr>
                                <td>Sesi</td>
                                <td>
                                    <input type="text" className="form-control" value={sesi} name="sesi" onChange={this.handlerChange} required />
                                </td>
                            </tr>
                            <tr>
                                <td>Jam</td>
                                <td>
                                    <input type="text" className="form-control" value={jam} name="jam" onChange={this.handlerChange} required />
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="submit" value="Edit" className="btn btn-primary" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}

export default EditMhs;