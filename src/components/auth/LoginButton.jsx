import { Button, Spinner } from 'react-bootstrap';

const LoginButton = ({email, password, emailError, passwordError}) =>{

    // console.log(email, password)
    const {loginStatus} = useSelector(state=>state.user)

    if(loginStatus === 'loading')
        return(
            <Button className='signin_button'>
                <Spinner size="sm" />
            </Button>
        )

    return (
            <Button type="submit" disabled={ emailError!=="" || passwordError!=="" || email==="" || password==="" }>
                    Sign In
            </Button>
    )
}
export default LoginButton