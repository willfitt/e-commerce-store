import React from 'react'

class APIData extends React.Component {
    constructor() {
        super();
        this.state= {
            storeData: [],
        };
    }

    componentDidMount() {
        fetch('https://my-json-server.typicode.com/tdmichaelis/json-api/products')
        .then(results => {
            return results.json();
        }).then(data => {
            let storeData = data.results.map((item) => {
                return(
                    <div key={item.results}>
                        <div>STUFF I WANT RETURNED</div>
                    </div>
                )
            })
            this.setState({storeData: storeData});
            console.log("state", this.state.storeData);
        })
    }

    render() {
        return (
               <div>
                   <div className="ui cards">
                        <div className="content">
                            <div className="right floated meta">PRODUCT NAME</div>
                        </div>
                        <div className="image">
                            <img></img>
                        </div>
                        <div className="content">
                           <div>PRODUCT DETAILS</div>
                        </div>
                    </div>
               </div> 
        )
    }

}

export default APIData