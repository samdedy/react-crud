import React, { Component } from 'react'
import API from '../axios/Api'

import DataTable from './DataTable'

export default class ListModulKelas extends Component {

    state = {
        listModul: []
    }

    componentDidMount = async () => {
        await API.get("/jadwal_batch/all")
            .then(response => {                
                this.setState({ listModul: response.data.data.jadwal_batch });
            })
            .catch(error => { console.log('error', error); });
    }

    render() {
        const renderData = this.state.listModul.map(listModul => {
            return (
                <DataTable listModul={listModul} key={listModul.id} refresh={this.componentDidMount} />
            )
        })

        return (
            <div className="container" style={{marginTop: '20px'}}>
                <div className="row">
                    <div className="col-lg-12">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Pelajaran</th>
                                    <th>Sesi</th>
                                    <th>Jam</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>

                                {renderData}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}