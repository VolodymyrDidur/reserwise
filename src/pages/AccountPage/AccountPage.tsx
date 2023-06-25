import "./AccountPage.scss"
import { PageHeader } from "../../components/PageHeader"
import { AccountAvatar } from "../../components/AccountAvatar/AccountAvatar";
import { AccountInfo } from "../../components/AccountInfo/AccountInfo";
import useUser from '../../hooks/useUser';

const image:string = "https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png";
const guestUser = {
    given_name:"Ivan",
    family_name:"Ivanovych",
    email: "guest@gmail.com",
    picture:image
}

export const AccountPage: React.FC<{}> = ({ })=>{

    const {user} = useUser();   
    const {given_name,family_name,email,picture} = user ?? guestUser;
   
    return(
        <div>
            <PageHeader headerText="Налаштування акаунту"/>
            <AccountAvatar image={ picture}/>
            <AccountInfo given_name={ given_name} 
            family_name={ family_name} 
            email={email}/>
            
        </div>
             
    )
}