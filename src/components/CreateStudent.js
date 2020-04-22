import React, { Component } from 'react'
//import { Button, Input, Header, Table } from 'semantic-ui-react'
import { createContract } from './../ethereum/DiplomaStorageContract'
import { web3} from './../ethereum/web3'

export class CreateStudent extends Component {

  async componentDidMount () {
    const student = await this.getStudents
  }
  
  getDiplomaStorageAddress () {
    return this.props.match.params.address
  }

  async getStudents(address) {
    const contract = createContract(address)

    const name = await contract.methods.name().call()
    const studentCount = await contract.methods.studentCount().call()

    this.setState({ studentCount })
    for (var i = 1; i <= studentCount; i++) {
      const student = await contract.methods.students(i).call()
      const idStudent = student[0].toNumber()
      this.setState({
        students: [...this.state.students, student]
      })

      const account = await web3.eth.getAccounts()

    return {
      constant: true,
		  inputs: [],
		  name: "studentCount",
		  outputs: [{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}]
    }
  }
}

  createStudent(INE, firstName, lastName, birth) {
    this.setState({ loading: true })
    this.state.todoList.methods.createStudent(INE, firstName, lastName, birth).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

  render() {
    return (
      <div id="content">
        <form onSubmit={(event) => {
          event.preventDefault()
          this.props.createStudent(this.INE, this.firstName, this.lastName, this.birth)
        }}>
          <input id="INE" ref={(input) => this.INE = input} type="text" className="form-control" placeholder="INE Number" required />
          <input id="fisrtName" ref={(input) => this.firstName = input} type="text" className="form-control" placeholder="First Name" required />
          <input id="lastName" ref={(input) => this.lastName = input} type="text" className="form-control" placeholder="Last Name" required />
          <input id="birth" ref={(input) => this.birth = input} type="text" className="form-control" placeholder="Birthday" required />
          <input type="submit" hidden={true} />
        </form>
        <ul id="studentList" className="list-unstyled">
          { this.props.students.map((student, key) => {
            return(
              <div className="checkbox" key={key}>
                <label>
                  <input type="checkbox" />
                  <span className="content">{student.content}</span>
                </label>
              </div>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default CreateStudent;