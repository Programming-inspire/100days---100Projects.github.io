import Layout from '../components/Layout';
import Prices from '../components/Prices';
const Index = (props) => {
    return (
        <Layout>
        <div>
            <h1>Welcome to Bitcoin Prices</h1>
            <p>Check Current Bitcoin Prices</p>
            <Prices bpi={props.bpi}/>
        </div>
        </Layout>
    )
}

Index.getInitialProps = async function(){
    const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    const data = await res.json();

    return{
        bpi: data.bpi,
    }
}

export default Index
