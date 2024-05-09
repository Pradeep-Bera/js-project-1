import './index.css'



const Account = (props) => {
    const { userdetails } = props;




    return <div className="bye">
        <h3> Name : {userdetails.name}</h3>
        <p>  Position :{userdetails.position}</p>

    </div>
}
export default Account;