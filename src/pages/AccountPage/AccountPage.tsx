import "./AccountPage.scss"
import { PageHeader } from "../../components/PageHeader"
import { AccountAvatar, AccountInfo, AccountSignOut, AccountSettings } from "../../components/AccountComponents";
import useUser from '../../hooks/useUser';
import { guestUser } from "../../assets/mocks/guestUserMocks";
import { useTranslation } from "react-i18next";

export const AccountPage: React.FC<{}> = ({ }) => {

    const { t } = useTranslation();
    const { user } = useUser();
    const { given_name, family_name, email, picture } = user ?? guestUser;

    return (
        <div>
            <PageHeader headerText={t('accountSettings')} />
            <AccountAvatar image={ picture } />
            <AccountInfo given_name={ given_name }
                family_name={ family_name }
                email={ email } />
            <AccountSettings/>
            <AccountSignOut />
        </div>

    )
}