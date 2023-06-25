import { SignOutButton } from "../../../views/SignOutButton/SignOutButton"
import "./AccountSignOut.scss"

export const AccountSignOut = ()=>{
    return(    
            <div className="signOut">
            <div className="signOut__block">
            <h3 className="signOut__title">Account</h3>
            <SignOutButton className="no"/>
            </div>
            </div>       
    )
}