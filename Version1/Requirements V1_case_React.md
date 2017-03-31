


			STORE -------->   DataBase
			  |	  <--------   Li (elements)	
			  |
			  |
			  |
			  |------------> APP	
			  |
			  |
			  |------------> INDEX --------> <Tasklist /> -------> <Task /> ------> <li>
			  |
			  |
			  |------------> ADDTASK ...			  
			  |
			  |
			  |------------> UPDATETASK ...			  
			  |
			  |
			  |------------> DELETETASK ...			  

			  *ACTION CREATORS*
			  =================
			AddTaskAction(data){
			  	axios.post(localhost:3000/ADDTASK, data){
			  		.then(if(200){
			  			bla bla
			  		})
			  	}
			}


						
			<!-- // class page extends...
			//
			  getListItems () {
			  return this.props.tasks.map(x=>{
			    return <ListItem data={x} />
			  })
			  }
			  render () {
			  return (
			    {this.getListItems.bind(this)}
			  )
			}

			class listitem extends ...
			render () {
			  return (
			<li>
			<span class="title">{this.props.data.title}</span>
			             <p>Salamis, Greece<br>
			                15/12/2017
			             </p>
			              <a href="/delete" class="right"><i class="material-icons">delete</i></a>
			              <span><a href="/update"><i class="material-icons">mode_edit</i></a> </span>  </li>
			  )
			} -->