import styled from 'styled-components'
import  {Button, TextField } from '@material-ui/core'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    width: 300px;
    display: flex;
    flex-direction: column;
  }
  section {
    margin-top: 32px;
  }
`
export const InputNewPost = styled(TextField)`

`
export const ButtonNewPost = styled(Button)`
  margin-top: 8px;
`
export const LogOutButton = styled(Button)`
  position: absolute;
  left: 16px;
  color: red;
  text-transform: lowercase;
`

